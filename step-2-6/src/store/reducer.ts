import {AnyAction} from "redux";

type filterTypes = 'all' | 'active' | 'completed';
export const filterReducer = (state = {filter: 'all'}, action: AnyAction) => {
  return action.filter
};
