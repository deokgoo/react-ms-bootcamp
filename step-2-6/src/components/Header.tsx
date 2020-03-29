import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FilterTypeEnum } from '../reducers/visibleFilter/type';
import FilterButton from './FilterButton';
import { addTodo } from '../reducers/todoList/action';

const Header = (props: any) => {
  const [labelInput, setLabelInput] = useState<string>('');

  const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLabelInput(e.currentTarget.value);
  };

  const _onAdd = () => {
    props.addTodo(labelInput);
    setLabelInput('');
  };

  return (
    <header>
      <h1>todos</h1>
      <div className="addTodo">
        <input className="textfield" placeholder="text" onChange={_onChange} value={labelInput}/>
        <button className="submit" onClick={_onAdd}>Add</button>
      </div>
      <nav className="filter">
        { Object.keys(FilterTypeEnum).map((x, idx) => <FilterButton enumIndex={idx} key={idx} />) }
      </nav>
    </header>
  );
};

const mapFetchToProps = {
  addTodo
}

export default connect(
  null,
  mapFetchToProps
)(Header);