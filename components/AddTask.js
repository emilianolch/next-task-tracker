import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import Button from "./Button";

const AddTask = ({ action }) => {
  const [task, setTask] = useState({ reminder: false });
  const setText = (event) => setTask({ ...task, text: event.target.value });
  const setDay = (event) => setTask({ ...task, day: event.target.value });
  const setReminder = (event) => {
    setTask({ ...task, reminder: event.target.checked });
  };

  const { mutate } = useSWRConfig();

  const postTask = async (task) => {
    fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((task) => {
        mutate("/api/tasks", (tasks) => [...tasks, task], {
          revalidate: false,
        });
      });
  };
  const addTask = (event) => {
    event.preventDefault();
    if (task.text && task.day) {
      postTask(task);
      // event.target.closest("form").reset();
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
