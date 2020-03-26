import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import TodoApp from './TodoApp';
import './style.css'

ReactDOM.render(
  <Provider store={ Store }>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
