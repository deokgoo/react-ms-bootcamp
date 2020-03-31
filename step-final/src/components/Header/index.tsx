import React from 'react';
import FilterButton from '../FilterButton';
import { filterItem, filterTypeObject } from '../../redux/types/filterType';

const Header = (props: {filter: filterItem}) => {
  let { filter } = props;
  return (
    <header>
      <h1>todos</h1>
      <div className="addTodo">
        <input className="textfield" placeholder="text"/>
        <button className="submit">Add</button>
      </div>
      <nav className="filter">
        { Object.values(filterTypeObject).map(x =>
          <FilterButton filterItem={filter} key={x}>{x}</FilterButton>) }
      </nav>
    </header>
  );
};

export default Header