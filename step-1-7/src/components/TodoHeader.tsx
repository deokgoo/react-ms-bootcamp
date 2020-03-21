import React, { useState } from 'react';
import { FilterTypes } from '../TodoApp.type';

interface TodoHeaderProps {
  addTodo: (label: string) => void,
  setFilter: (type: any) => void,
  filter: FilterTypes,
}

const TodoHeader = (props: TodoHeaderProps) => {
  const { filter, setFilter, addTodo } = props;
  const [labelInput, setLabelInput] = useState<string>('');

  const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLabelInput(e.currentTarget.value);
  };

  const _onAddFilter = (e: React.FormEvent) => {
    const filter = e.currentTarget.textContent;
    setFilter(filter);
  }

  const _onAdd = () => {
    addTodo(labelInput);
    setLabelInput('');
  };

  return (
    <header>
      <h1>todos</h1>
      <div className="addTodo">
        <input className="textfield" placeholder="add todo" onChange={_onChange} value={labelInput}/>
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