type filter = 'ALL' | 'ACTIVE' | 'COMPLETED'

export interface filterType {
  filter: filter
}

export const filterTypeObject: {[key: string]: filter} = {
  'ALL': 'ALL',
  'ACTIVE': 'ACTIVE',
  'COMPLETED': 'COMPLETED',
};

export const filterAction = {
  SET_FILTER : "SET_FILTER"
};