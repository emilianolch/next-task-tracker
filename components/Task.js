import { useSWRConfig } from "swr";
import { deleteTask, updateTask } from "../helpers/tasksHelper";
import { FaTimes } from "react-icons/fa";
import Toggle from "./Toggle";

const Task = ({ task }) => {
  const { mutate } = useSWRConfig();

  const remove = (id) => {
    deleteTask(id).then(() => {
      mutate("/api/tasks", (tasks) => tasks.filter((task) => task._id != id), {
        revalidate: false,
      });
    });
  };

  const updateTaskReminder = (task) => {
    updateTask(task._id, { reminder: !task.reminder }).then((data) => {
      mutate(
        "/api/tasks",
        (tasks) =>
          tasks.map((t) =>
            t._id == task._id ? { ...t, reminder: !t.reminder } : t
          ),
        { revalidate: false }
      );
    });
  };

  return (
    <div
      className={`${
        task.reminder ? "bg-blue-100" : "bg-gray-100"
      } px-2.5 py-1 flex justify-between items-center`}
    >
      <div>
        <p className="font-medium">{task.text}</p>
        <p className="mb-3">{task.day}</p>
        <Toggle
          checked={task.reminder}
          onToggle={() => updateTaskReminder(task)}
        />
      </div>
      <FaTimes className="cursor-pointer" onClick={() => remove(task._id)} />
    </div>
  );
};

export default Task;
