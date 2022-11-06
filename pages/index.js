import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

export default function Home({ tasks }) {
  return (
    <>
      <AddTask />
      <Tasks />
    </>
  );
}
