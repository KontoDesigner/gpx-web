import { ActionTypes as types } from '../../constants/staffEdit/historyConstants';

var defaultState = [];

export default function historyReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_HISTORY_SUCCESS:
            return action.data.history;
        case types.GET_HISTORY:
            return action.data.history; 
        default:
            return state;
    }
} 