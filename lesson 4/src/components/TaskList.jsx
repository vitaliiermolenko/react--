import React from 'react';

const Task = React.memo(({ task, onDelete }) => {
  return (
    <div>
      {task.name}
      <button onClick={onDelete}>Видалити</button>
    </div>
  );
});

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => onDeleteTask(index)} />
      ))}
    </div>
  );
};

export default TaskList;
