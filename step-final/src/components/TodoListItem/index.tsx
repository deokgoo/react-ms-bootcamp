import React from "react";

const TodoListItem = (props: any) => {
  let { completed, children } = props;
  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={completed}/> { children }
      </label>
    </li>
  );
};

export default TodoListItem