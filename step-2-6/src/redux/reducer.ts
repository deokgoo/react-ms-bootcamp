import { combineReducers } from 'redux';
import TodoListReducer from './todoList/reducer';
import VisibleFilterReducer from './visibleFilter/reducer';

export default combineReducers({ TodoListReducer, VisibleFilterReducer });
