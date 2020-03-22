import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';

const TodoFooter = (props: any) => {
  const { todos, clear } = useContext(TodoContext);
  const itemCount = Object.keys(todos).filter(id => !todos[id].completed).length;

  return (
    <footer>
      <span>{itemCount} item{itemCount>1?"s":""} left</span>
      <button className="submit" onClick={clear}>Clear Completed</button>
    </footer>
  );
};

export default TodoFooter
