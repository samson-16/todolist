import React from 'react';

const TodoItem = ({ task, onRemove, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onRemove(task.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
