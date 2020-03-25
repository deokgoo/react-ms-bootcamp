import React, { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';

const TodoHeader = (props: any) => {
  const { filter, setFilter, addTodo } = useContext(TodoContext);
  const [labelInput, setLabelInput] = useState<string>('');

  const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLabelInput(e.currentTarget.value);
  };

  const _onAddFilter = (e: React.FormEvent) => {
    const nFilter = e.currentTarget.textContent;
    setFilter(nFilter);
  }

  const _onAdd = () => {
    addTodo(labelInput);
    setLabelInput('');
  };

  return (
    <header>
      <h1>todos</h1>
      <div className="addTodo">
        <input className="textfield" placeholder="What needs to be done?" onChange={_onChange} value={labelInput}/>
        <button className="submit" onClick={_onAdd}>Add</button>
      </div>
      <nav className="filter">
        <button className={filter === 'all' ? 'selected' : ''} onClick={_onAddFilter}>all</button>
        <button className={filter === 'active' ? 'selected' : ''} onClick={_onAddFilter}>active</button>
        <button className={filter === 'completed' ? 'selected' : ''} onClick={_onAddFilter}>completed</button>
      </nav>
    </header>
  );
}

export default TodoHeader;