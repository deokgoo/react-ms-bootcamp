import React from 'react';
import TodoListItem from '../TodoListItem';
import { todoListType } from '../../redux/types/todoListType';

interface todoListProps {
  todoLists: todoListType,
  toggleCompleted: (created: string) => void
}
const TodoList = (props: todoListProps) => {
  let { todoLists } = props;
  let { toggleCompleted } = props;

  return (
    <ul className="todos">
      {
        Object.keys(todoLists).map(x => {
          let { label, completed } = todoLists[x];
          return <TodoListItem key={x} createdAt={x} completed={completed} toggleCompleted={toggleCompleted}>{label}</TodoListItem>
        })
      }
    </ul>
  );
};

export default TodoList