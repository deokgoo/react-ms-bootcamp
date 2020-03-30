import React from 'react';
import TodoListItem from '../TodoListItem';
import { todoListType } from '../../redux/types/todoListType';

const TodoList = (props: {todoLists: todoListType}) => {
  let { todoLists } = props;

  return (
    <ul className="todos">
      {
        Object.keys(todoLists).map(x => {
          let { label, completed } = todoLists[x];
          return <TodoListItem completed={completed}>{label}</TodoListItem>
        })
      }

    </ul>
  );
};

export default TodoList