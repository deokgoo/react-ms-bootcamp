import { AnyAction } from 'redux';
import { FilterTypesInterface } from './type';
import * as ActionType from './actionType';

export default (state: {filterType: FilterTypesInterface} = {filterType: FilterTypesInterface.ALL }, action: AnyAction ) => {
    switch (action.type) {
        case ActionType.SET_FILTER: {
            console.log(action.filterType);
            return { filterType: action.filterType };
        }
        default: {
            return state;
        }
    }
};
