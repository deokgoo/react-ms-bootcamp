import React, { useState } from 'react';
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

const App = () => {
  const [todos] = useState(initTodos);
  const [filter] = useState('all');

  return (
    <div className="App">
      <TodoHeader filter={filter} />
      <TodoList todos={todos} filter={filter} />
      <TodoFooter todos={todos} />
    </div>
  );
}

export default App;
