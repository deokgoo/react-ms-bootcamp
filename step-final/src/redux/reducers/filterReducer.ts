import { AnyAction } from 'redux';
import { filterType, filterTypeObject, filterAction } from '../types/filterType';

export default (state: filterType = {filter: filterTypeObject.ALL}, action: AnyAction ) => {
  switch (action.type) {
    case filterAction.SET_FILTER: {
      return {
        filter: action.filter
      };
    }
    default: {
      return state;
    }
  }
};
