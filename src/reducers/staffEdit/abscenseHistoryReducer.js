import { ActionTypes as types } from '../../constants/staffEdit/abscenseHistoryConstants';

var defaultState = [];

export default function abscenseHistoryReducer(state = defaultState, action) {
    switch (action.type) {
 
            case types.GET_ABSCENSEHISTORY_SUCCESS:
            return action.data.abscenseHistory;
            case types.GET_ABSCENSEHISTORY:
            return action.data.abscenseHistory;
        default:
            return state;
    }
} 