import React from 'react';
import './style.css';
import HeaderContainer from '../../containers/HeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import Footer from '../../components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <TodoListContainer />
      <Footer/>
    </div>
  );
}

export default App;
