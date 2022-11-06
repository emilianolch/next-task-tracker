import Task from "./Task";

const Tasks = ({ tasks, actions }) => {
  return (
    <div className="p-3 space-y-2">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} actions={actions} />
        ))
      ) : (
        <p className="text-center">There are no tasks</p>
      )}
    </div>
  );
};

export default Tasks;
