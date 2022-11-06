import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("TaskTracker");
  const tasks = await db.collection("tasks").find({}).toArray();

  res.status(200).json({ tasks: tasks });
}
