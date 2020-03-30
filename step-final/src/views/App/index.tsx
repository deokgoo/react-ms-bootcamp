import React from 'react';
import './style.css';
import Header from '../../components/Header';
import TodoListContainer from '../../containers/TodoListContainer';
import Footer from '../../components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoListContainer />
      <Footer/>
    </div>
  );
}

export default App;
