import React from 'react';

const TodoListItem = (props: any) => {
  const { label, completed } = props;
  const _onChange = () => {

  }
  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={completed} onChange={_onChange}/> { label }
      </label>
    </li>
  );
}

export default TodoListItem