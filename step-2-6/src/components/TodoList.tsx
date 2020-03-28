import React from 'react';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';

const TodoList = (props: any) => {
  const todoList = props.todoListStore;
  const { filter } = props.visibleFilterStore;

  const filteredTodos = Object.keys(todoList).filter(id => {
    return filter === 'all' || (filter === 'completed' && todoList[id].completed) || (filter === 'active' && !todoList[id].completed);
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
  const { TodoListReducer, VisibleFilterReducer } = state;

  return { todoListStore: TodoListReducer, visibleFilterStore: VisibleFilterReducer};
};

export default connect(
    mapStateToProps
)(TodoList);