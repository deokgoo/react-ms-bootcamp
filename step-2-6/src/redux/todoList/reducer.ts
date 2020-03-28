import { AnyAction } from 'redux';
import { TodoListInterface } from "./type";
import * as actionType from './actionType';
import { uuid } from 'uuidv4';

export default (state: TodoListInterface = {}, action: AnyAction) => {
  switch (action.type) {
    case actionType.ADD_TODO: {
      const { todo: nextTodo } = action.payload;
      const todoList = state;

      todoList[uuid()] = nextTodo;
      return { todoList };
    }
    default:
      return state;
  }
};
