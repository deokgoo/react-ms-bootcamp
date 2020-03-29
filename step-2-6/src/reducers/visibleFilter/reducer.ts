import { AnyAction } from 'redux';
import { FilterTypeEnum } from './type';
import * as ActionType from './actionType';

export default (state: {filterType: FilterTypeEnum} = {filterType: FilterTypeEnum.ALL }, action: AnyAction ) => {
    switch (action.type) {
        case ActionType.SET_FILTER: {
            return { filterType: action.filterType };
        }
        default: {
            return state;
        }
    }
};
