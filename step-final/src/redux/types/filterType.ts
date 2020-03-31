export type filterItem = 'ALL' | 'ACTIVE' | 'COMPLETED'

export interface filterType {
  filter: filterItem
}

export const filterTypeObject: {[key: string]: filterItem} = {
  'ALL': 'ALL',
  'ACTIVE': 'ACTIVE',
  'COMPLETED': 'COMPLETED',
};

export const filterAction = {
  SET_FILTER : "SET_FILTER"
};
