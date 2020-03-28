import * as actionType from './actionType';
import { FilterTypesInterface } from './type';

export const setFilter = (filterType: FilterTypesInterface) => {
  return ({
    type: actionType.SET_FILTER,
    filterType
  })
};
