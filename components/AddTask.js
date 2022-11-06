import { useState } from "react";
import Button from "./Button";

const AddTask = ({ submitTask }) => {
  const [task, setTask] = useState({ reminder: false });
  const setText = (event) => setTask({ ...task, text: event.target.value });
  const setDay = (event) => setTask({ ...task, day: event.target.value });
  const setReminder = (event) => {
    setTask({ ...task, reminder: event.target.checked });
  };
  const addTask = (event) => {
    event.preventDefault();
    if (task.text && task.day) {
      submitTask(task);
      event.target.closest("form").reset();
    }
  };

  return (
    <form className="p-3 space-y-3">
      <input
        type="text"
        onInput={setText}
        placeholder="Enter a task"
        className="col-span-2 px-3 py-1 border shadow-sm focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
      <div className="flex space-x-3 items-center justify-between">
        <input
          type="datetime-local"
          onInput={setDay}
          placeholder="Enter date and time"
          className="px-3 py-1 border shadow-sm focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <div className="flex space-x-2 items-center">
          <input
            type="checkbox"
            defaultChecked={task.reminder}
            onInput={setReminder}
            id="reminder"
            className="h-4 w-4 inline-block border border-gray-300 rounded shadow"
          />
          <label htmlFor="reminder">Reminder</label>
        </div>
      </div>
      <Button text="Save task" action={addTask} />
    </form>
  );
};

export default AddTask;
