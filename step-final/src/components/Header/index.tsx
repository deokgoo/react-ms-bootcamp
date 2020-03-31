import React, { useState } from 'react';
import FilterButton from '../FilterButton';
import { filterType, filterItem, filterTypeObject } from '../../redux/types/filterType';

interface headerProps {
  filter: filterItem,
  setFilter: (filterType: filterType) => void
  addTodo: (todoItem: string) => void
}

const Header = (props: headerProps) => {
  let { filter } = props;
  let { setFilter, addTodo } = props;
  let [inputItem, setInputItem] = useState<string>('');

  const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputItem(e.currentTarget.value);
  };

  const _onClick = () => {
    setInputItem('');
    return addTodo(inputItem);
  };

  return (
    <header>
      <h1>todos</h1>
      <div className="addTodo">
        <input className="textfield" placeholder="text" onChange={_onChange} value={inputItem}/>
        <button className="submit" onClick={_onClick}>Add</button>
      </div>
      <nav className="filter">
        { Object.values(filterTypeObject).map(x =>
          <FilterButton key={x} filterItem={filter} _onClick={setFilter}>{x}</FilterButton>) }
      </nav>
    </header>
  );
};

export default Header