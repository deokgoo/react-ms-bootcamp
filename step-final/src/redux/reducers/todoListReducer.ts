import { AnyAction } from 'redux';
import { todoListType, todoListAction } from '../types/todoListType';

const exampleTodoList = {
  '202003302347' : {
    label: 'commit!!!!',
    completed: false
  },
  '202003302348' : {
    label: 'commit22222222!!!!',
    completed: true
  }
};

export default (state: todoListType = exampleTodoList, action: AnyAction ) => {
  switch (action.type) {
    case todoListAction.CLEAR: {
      // VOID
      return state
    }
    case todoListAction.ADD_TODO: {
      // new todo
      return state
    }
    case todoListAction.TOGGLE_COMPLETED: {
      // created
      return state
    }
    case todoListAction.REMOVE: {
      // created
      return state
    }
    default: {
      return state;
    }
  }
};
