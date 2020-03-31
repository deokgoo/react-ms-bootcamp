import React from "react";

const TodoListItem = (props: any) => {
  let { completed, children, createdAt } = props;
  let { toggleCompleted } = props;

  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={completed} onChange={()=>{toggleCompleted(createdAt)}}/> { children }
      </label>
    </li>
  );
};

export default TodoListItem