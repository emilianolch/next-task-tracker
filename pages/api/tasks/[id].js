import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const collection = client.db("TaskTracker").collection("tasks");
  const _id = req.query.id;
  if (req.method == "DELETE") {
    console.log({ _id });
    collection
      .deleteOne({ _id })
      .then(() => {
        console.log("ok");
        res.status(200).json({ _id });
      })
      .catch((e) => {
        console.error(e);
        res.status(500);
      });
  }
}
