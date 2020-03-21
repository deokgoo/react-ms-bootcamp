import React from 'react';

const TodoHeader = (props: any) => {
  return (
    <header>
      <h1>todos</h1>
      <div className="addTodo">
        <input className="textfield" placeholder="add todo" />
        <button className="submit">Add</button>
      </div>
      <nav className="filter">
        <button className="completed">all</button>
        <button>active</button>
        <button>completed</button>
      </nav>
    </header>
  );
}

export default TodoHeader;