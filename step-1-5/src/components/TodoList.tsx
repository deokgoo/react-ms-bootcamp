import React from 'react';

const TodoList = (props: any) => {
  return (
    <li className="todo">
      <label>
        <input type="checkbox" /> Todo 1
      </label>
    </li>
  );
}

export default TodoList