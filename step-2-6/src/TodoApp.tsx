import React from 'react';
import TodoHeader from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const ToDoApp = () => {
  return (
    <div className="App">
      <TodoHeader />
      <TodoList />
      <Footer />
    </div>
  );
};

export default ToDoApp;
