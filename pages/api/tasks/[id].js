import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const collection = client.db("TaskTracker").collection("tasks");
  const id = req.query.id;

  if (req.method == "DELETE") {
    return collection
      .deleteOne({ _id: ObjectId(id) })
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((e) => {
        console.error(e);
        res.status(500);
      });
  }

  if (req.method == "PATCH") {
    const fields = JSON.parse(req.body).fields;
    return collection
      .updateOne({ _id: ObjectId(id) }, { $set: fields })
      .then((data) => res.status(200).json(data))
      .catch((e) => {
        console.error(e);
        res.status(500);
      });
  }
}
