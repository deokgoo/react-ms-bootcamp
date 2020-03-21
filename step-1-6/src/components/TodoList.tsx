import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props: any) => {
  const { todos } = props;
  return (
    <ul className="todos">
      {Object.values(todos).map((x: any, i: number) => (
        <TodoListItem key={i} data={x} />)
      )}
    </ul>
  );
}

export default TodoList