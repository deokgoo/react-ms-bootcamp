import React, { useState } from 'react';
import { Todos, FilterTypes, CompleteTodo } from './TodoApp.type';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

const initTodos = {
  '04': {
    label: 'Todo 4',
    completed: true
  },
  '03': {
    label: 'Todo 3',
    completed: false
  },
  '02': {
    label: 'Todo 2',
    completed: false
  },
  '01': {
    label: 'Todo 1',
    completed: false
  }
}

const ToDoApp = () => {
  const [todos, setTodos] = useState<Todos>(initTodos);
  const [filter, setFilter] = useState<FilterTypes>('all');

  const _complete:CompleteTodo = (id: string) => {
    
  }

  const _setFilter = (filterType: FilterTypes) => {
    setFilter(filterType)
  }

  const _clear = () => {
    setTodos({});
  }

  const _onAdd = (label: string) => {
    const nextNum = (Object.keys(todos).length+1);
    setTodos({
      ...todos,
      [nextNum]: {
        label,
        completed: false,
      }
    })
  }

  return (
    <div className="App">
      <TodoHeader filter={filter} setFilter={_setFilter} addTodo={_onAdd} />
      <TodoList complete={_complete} todos={todos} filter={filter} />
      <TodoFooter todos={todos} clear={_clear}/>
    </div>
  );
}

export default ToDoApp;
