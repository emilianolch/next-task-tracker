import { useSWRConfig } from "swr";
import { deleteTask } from "../helpers/tasksHelper";
import { FaTimes } from "react-icons/fa";
import Toggle from "./Toggle";

const Task = ({ task }) => {
  const { mutate } = useSWRConfig();
  const remove = (id) => {
    deleteTask(id).then((id) => {
      console.log(id);
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
          onToggle={() => actions.toggleReminder(task)}
        />
      </div>
      <FaTimes className="cursor-pointer" onClick={() => remove(task._id)} />
    </div>
  );
};

export default Task;
