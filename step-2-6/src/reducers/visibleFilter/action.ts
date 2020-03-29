import * as actionType from './actionType';
import { FilterTypeEnum } from './type';

export const setFilter = (filterType: FilterTypeEnum) => {
  return ({
    type: actionType.SET_FILTER,
    filterType
  })
};
