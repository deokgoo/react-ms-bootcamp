import React from 'react';
import TodoListItem from '../TodoListItem';

const TodoList = (props: any) => {
  return (
    <ul className="todos">
      <TodoListItem />
    </ul>
  );
};

export default TodoList