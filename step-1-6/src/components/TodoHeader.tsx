import React, { useState } from 'react';

const TodoHeader = (props: any) => {
  const { filter } = props;
  const [labelInput, setLabelInput] = useState('');

  const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLabelInput(e.currentTarget.value);
  };

  return (
    <header>
      <h1>todos</h1>
      <div className="addTodo">
        <input className="textfield" placeholder="add todo" onChange={_onChange} />
        <button className="submit">Add</button>
      </div>
      <nav className="filter">
        <button className={filter === 'all' ? 'selected' : ''}>all</button>
        <button className={filter === 'active' ? 'selected' : ''}>active</button>
        <button className={filter === 'completed' ? 'selected' : ''}>completed</button>
      </nav>
    </header>
  );
}

export default TodoHeader;