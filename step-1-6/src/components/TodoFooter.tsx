import React from 'react';

const TodoFooter = (props: any) => {
  const { todos } = props;
  const itemCount = Object.keys(todos).filter(id => !props.todos[id].completed).length;
  return (
    <footer>
      <span>{itemCount} item{itemCount>1?"s":""} left</span>
      <button className="submit">Clear Completed</button>
    </footer>
  );
};

export default TodoFooter
