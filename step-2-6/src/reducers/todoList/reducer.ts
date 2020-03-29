import { AnyAction } from 'redux';
import { TodoListInterface } from "./type";
import * as actionType from './actionType';
import { uuid } from 'uuidv4';

export default (state: TodoListInterface = {"test": {label: 'some', completed: false}}, action: AnyAction) => {
  switch (action.type) {
    case actionType.ADD_TODO: {
      const { todo } = action.payload;
      const todoList = {...state};

      todoList[uuid()] = {
        label: todo,
        completed: false
      }

      return todoList;
    }
    case actionType.CLEAR: {
      console.log("clear");
      return state;
    }
    default:
      return state;
  }
};
