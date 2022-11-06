import Task from "./Task";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Tasks = ({ actions }) => {
  const { data, error } = useSWR("/api/tasks", fetcher);

  if (error) return <div className="text-center">Failed to load</div>;
  if (!data) return <div className="text-center">Loading...</div>;

  return (
    <div className="p-3 space-y-2">
      {data.tasks.length > 0 ? (
        data.tasks.map((task) => (
          <Task key={task._id} task={task} actions={actions} />
        ))
      ) : (
        <p className="text-center">There are no tasks</p>
      )}
    </div>
  );
};

export default Tasks;
