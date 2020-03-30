import { todoListType, todoListAction } from '../types/todoListType';

export const addTodo = () => {
  return ({
    type: todoListAction.ADD_TODO
  })
};

export const toggleCompleted = () => {
  return ({
    type: todoListAction.TOGGLE_COMPLETED
  })
};

export const remove = () => {
  return ({
    type: todoListAction.REMOVE
  })
};

export const clear = () => {
  return ({
    type: todoListAction.CLEAR
  })
};