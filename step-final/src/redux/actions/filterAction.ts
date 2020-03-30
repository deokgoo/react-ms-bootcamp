import { filterType, filterAction } from '../types/filterType';

export const setFilter = (filterType: filterType) => {
  let { filter } = filterType;

  return ({
    type: filterAction.SET_FILTER,
    filter
  })
};