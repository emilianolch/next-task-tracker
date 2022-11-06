import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const collection = client.db("TaskTracker").collection("tasks");

  if (req.method == "POST") {
    const task = JSON.parse(req.body).task;
    collection
      .insertOne(task)
      .then((data) => res.status(200).json({ ...task, _id: data.insertedId }))
      .catch((e) => {
        console.error(e);
        res.status(500);
      });
    return;
  }
  const tasks = await collection.find({}).toArray();
  res.status(200).json(tasks);
}
