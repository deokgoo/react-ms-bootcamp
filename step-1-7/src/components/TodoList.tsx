import React from 'react';
import TodoListItem from './TodoListItem';
import { Todos, FilterTypes, CompleteTodo } from '../TodoApp.type';

interface TodoListProps {
  filter: FilterTypes,
  todos: Todos,
  complete: CompleteTodo
}

const TodoList = (props: TodoListProps) => {
  const { filter, todos, complete } = props;

  const filteredTodos = Object.keys(todos).filter(id => {
    return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
  });

  return (
    <ul className="todos">
      {filteredTodos.map((id) => (
        <TodoListItem key={id} complete={complete} {...todos[id]} />
      ))}
    </ul>
  );
}

export default TodoList