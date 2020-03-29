import React from 'react';
import { FilterTypeEnum } from '../reducers/visibleFilter/type';
import TodoListItem from '../components/TodoListItem'
import { connect } from 'react-redux';

const TodoList = (props: any) => {
  let todoList = props.todoListStore;
  let { filterType } = props.visibleFilterStore;
  
  const filteredTodos = Object.keys(todoList).filter(x => {
    switch(FilterTypeEnum[filterType]){
      case 'ACTIVE':
        return !todoList[x].completed
      case 'COMPLETED':
        return todoList[x].completed
      default:
        return true;
    }
  });

  return (
    <ul className="todos">
      {filteredTodos.map((id) => (
        <TodoListItem key={id} {...todoList[id]} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  const { todoListStore, visibleFilterStore } = state;
  
  return { todoListStore, visibleFilterStore};
};

export default connect(
  mapStateToProps
)(TodoList);