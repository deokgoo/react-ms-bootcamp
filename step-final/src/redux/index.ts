import { combineReducers } from 'redux';
import todoListReducer from './reducers/todoListReducer';
import filterReducer from './reducers/filterReducer';

export default combineReducers({ TodoListStore: todoListReducer, FilterStore: filterReducer })
