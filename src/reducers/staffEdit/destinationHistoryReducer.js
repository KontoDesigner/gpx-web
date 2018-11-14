import { ActionTypes as types } from '../../constants/staffEdit/destinationHistoryConstants';

var defaultState = [];

export default function destinationHistoryReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_DESTINATIONHISTORY_SUCCESS:
            return action.data.destinationHistory;
        case types.GET_DESTINATIONHISTORY:
            return action.data.destinationHistory;
        default:
            return state;
    }
} 