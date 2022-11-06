import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const collection = client.db("TaskTracker").collection("tasks");

  if (req.method == "POST") {
    const id = await collection.insertOne(req.body.task);
    res.status(200).json({ id: id });
  } else {
    const tasks = await collection.find({}).toArray();
    res.status(200).json({ tasks: tasks });
  }
}
