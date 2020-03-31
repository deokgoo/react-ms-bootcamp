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
    case todoListAction.ADD_TODO: {
      let now = new Date();
      let createdAt = `${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getUTCDate()}${now.getHours()}${now.getMinutes()}${now.getMilliseconds()}`;
      let nextTodo = {
        [createdAt] : {
          label: action.todoItem,
          completed: false
        }
      };

      return Object.assign(nextTodo, state);
    }
    case todoListAction.CLEAR: {
      // VOID
      return state
    }
    case todoListAction.TOGGLE_COMPLETED: {
      let nextState = Object.assign({}, state);

      nextState[action.createdAt].completed = !nextState[action.createdAt].completed;
      return nextState
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
