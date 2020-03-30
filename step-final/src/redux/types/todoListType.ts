export interface todoListType {
  [created: string] : todoItemType
}

export interface todoItemType {
  label: string,
  completed: boolean
}

export const todoListAction = {
  'CLEAR' : 'CLEAR',
  'ADD_TODO' : 'ADD_TODO',
  'TOGGLE_COMPLETED' : 'TOGGLE_COMPLETED',
  'REMOVE' : 'REMOVE'
}