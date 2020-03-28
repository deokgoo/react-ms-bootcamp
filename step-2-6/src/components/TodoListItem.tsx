import React from 'react';

const TodoListItem = (props: any) => {
  const { label } = props;
  const _onChange = () => {

  }
  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={props.completed} onChange={_onChange}/> { label }
      </label>
    </li>
  );
}

export default TodoListItem