import { todoListType, todoListAction } from '../types/todoListType';

export const addTodo = (todoItem: string) => {
  return ({
    type: todoListAction.ADD_TODO,
    todoItem
  })
};

export const toggleCompleted = (createdAt: string) => {
  return ({
    type: todoListAction.TOGGLE_COMPLETED,
    createdAt
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