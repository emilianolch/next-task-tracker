import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

const tasks = [];

export default function Home() {
  return (
    <>
      <AddTask />
      <Tasks tasks={tasks} />
    </>
  );
}
