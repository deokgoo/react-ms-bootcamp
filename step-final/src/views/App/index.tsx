import React from 'react';
import './style.css';
import Header from '../../components/Header';
import TodoList from '../../components/TodoList';
import Footer from '../../components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer/>
    </div>
  );
}

export default App;
