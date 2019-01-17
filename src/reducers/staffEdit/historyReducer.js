import { ActionTypes as types } from '../../constants/staffEdit/historyConstants';

var defaultState = [];

export default function HistoryReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_HISTORY_SUCCESS:
            return action.data.History;
        case types.GET_HISTORY:
            return action.data.History; 
        default:
            return state;
    }
} 