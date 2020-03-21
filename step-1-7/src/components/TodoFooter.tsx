import React from 'react';
import { Todos } from '../TodoApp.type'

interface TodoFooterProps {
  todos: Todos
  clear: () => void
}

const TodoFooter = (props: TodoFooterProps) => {
  const { todos } = props;
  const itemCount = Object.keys(todos).filter(id => !props.todos[id].completed).length;

  const _onClick = () => {
    props.clear();
  }

  return (
    <footer>
      <span>{itemCount} item{itemCount>1?"s":""} left</span>
      <button className="submit" onClick={_onClick}>Clear Completed</button>
    </footer>
  );
};

export default TodoFooter
