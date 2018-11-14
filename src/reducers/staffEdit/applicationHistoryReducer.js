import { ActionTypes as types } from '../../constants/staffEdit/applicationHistoryConstants';

var defaultState = [];

export default function applicationHistoryReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_RESIGNHISTORY_SUCCESS:
            return action.data.resignHistory;
        case types.GET_RESIGNHISTORY:
            return action.data.resignHistory;
        default:
            return state;
    }
} 