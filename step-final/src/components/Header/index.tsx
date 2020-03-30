import React from 'react';
import FilterButton from '../FilterButton';

const Header = (props: any) => {
  return (
    <header>
      <h1>todos</h1>
      <div className="addTodo">
        <input className="textfield" placeholder="text"/>
        <button className="submit">Add</button>
      </div>
      <nav className="filter">
        <FilterButton />
      </nav>
    </header>
  );
};

export default Header