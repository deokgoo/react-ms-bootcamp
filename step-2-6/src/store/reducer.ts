import * as actionType from './actionType';
import { AnyAction } from 'redux';
import { uuid } from 'uuidv4';

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
    [id: string]: TodoItem;
  };
  filter: FilterTypes;
}

export const filterReducer = (state: Store = {todos:{} ,filter: FilterTypes.ALL}, action: AnyAction) => {
  switch (action.type) {
    case actionType.ADD_TODO: {
      const { todo } = action.payload;
      const { todos, ...args } = state;
      todos[uuid()] = todo;
      return {
        todos,
        ...args
      };
    }
    default:
      return state;
  }
};
