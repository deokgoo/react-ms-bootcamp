import React from "react";

const TodoListItem = (props: any) => {
  return (
    <li className="todo">
      <label>
        <input type="checkbox" /> label
      </label>
    </li>
  );
};

export default TodoListItem