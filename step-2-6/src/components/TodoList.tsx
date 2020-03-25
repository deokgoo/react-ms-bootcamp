import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import TodoListItem from './TodoListItem';

const TodoList = (props: any) => {
  const { filter, todos, complete } = useContext(TodoContext);

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