import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todolist.js';
import TodoForm from './components/todoform.js';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>React To-Do List</h1>
     
     
      <TodoForm onSubmit={addTask} />
      <TodoList tasks={tasks} onRemove={removeTask} onToggle={toggleTask} />
    </div>
  );
}




export default App;
