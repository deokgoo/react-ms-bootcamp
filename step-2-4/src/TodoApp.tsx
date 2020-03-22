import React, { useState } from 'react';
import { TodoContext } from './TodoContext';
import { Todos, FilterTypes, CompleteTodo } from './TodoApp.type';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

const ToDoApp = () => {
  const [todos, setTodos] = useState<Todos>({});
  const [filter, setFilter] = useState<FilterTypes>('all');

  const _complete:CompleteTodo = (id: string) => {
    
  }

  const _setFilter = (filterType: FilterTypes) => {
    setFilter(filterType)
  }

  const _clear = () => {
    setTodos({});
  }

  const _addTodo = (label: string) => {
    const nextNum = (Object.keys(todos).length+1);
    setTodos({
      ...todos,
      [nextNum]: {
        label,
        completed: false,
      }
    })
  }

  const _remove = () => {

  }

  const _edit = () => {

  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        addTodo: _addTodo,
        remove: _remove,
        complete: _complete,
        clear: _clear,
        setFilter: _setFilter,
        edit: _edit
      }}
    >
      <div className="App">
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    </TodoContext.Provider>
  );
}

export default ToDoApp;
