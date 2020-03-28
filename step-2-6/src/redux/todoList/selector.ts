import { TodoListInterface } from './type';
import { FilterTypesInterface } from '../visibleFilter/type';

export const getTodoList = (state: TodoListInterface) => state;

export const getFilterType = (state: FilterTypesInterface) => state;
