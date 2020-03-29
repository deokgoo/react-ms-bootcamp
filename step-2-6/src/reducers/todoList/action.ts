import * as actionType from './actionType';

export const addTodo = (label: string) => {
  return ({
    type: actionType.ADD_TODO,
    payload: {
      todo: label
    }
  })
};

export const clear = () => {
  return ({
    type: actionType.CLEAR
  })
}

export const remove = () => {

};

export const edit = () => {

};
