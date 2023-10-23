import React, { useState, useCallback, useLayoutEffect, useEffect } from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';
import useTheme from './useTheme';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('appTasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    localStorage.setItem('appTasks', JSON.stringify(tasks)); // Збереження завдань в localStorage
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { name: newTask }]);
  };

  const handleDeleteTask = useCallback((index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }, [tasks]);

  useLayoutEffect(() => {
    document.title = `У вас ${tasks.length} завдань`;
  }, [tasks]);

  return (
    <div className={`App ${theme}`}>
      <h1>Список завдань</h1>
      <button onClick={toggleTheme}>Змінити тему</button>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
