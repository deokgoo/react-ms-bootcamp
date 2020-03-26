import { AnyAction } from 'redux';
import * as actionType from './actionType';

enum FilterTypes {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}

export interface TodoItem {
  label: string;
  completed: boolean;
}

export interface Store {
  todos: {
    [id: number]: TodoItem;
  };
  filter: FilterTypes;
}

export const filterReducer = (state: Store = {todos:{} ,filter: FilterTypes.ALL}, action: AnyAction) => {
  switch (action.type) {
    case actionType.ADD_TODO: {
      const { todo } = action.payload;
      const { todos, ...args } = state;
      return {
        todos : {
          ...todos,
          "test": {
            label: todo,
            completed: false,
          }
        },
        ...args
      };
    }
    default:
      return state;
  }
};
