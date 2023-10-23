import React, { useState, useRef } from 'react';

const TaskInput = ({ onAddTask }) => {
  const inputRef = useRef(null);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.length > 0) {
      onAddTask(task);
      setTask('');
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Нове завдання"
        onChange={(e) => setTask(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleAddTask}>Додати</button>
    </div>
  );
};

export default TaskInput;
