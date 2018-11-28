import { ActionTypes as types } from '../../constants/planning/planningConstants';

var defaultState = [];

export default function candidateReducer(state = defaultState, action) {
    switch (action.type) {
      
        case types.GET_STAFFCANDIDATE_SUCCESS:
        return action.data.candidate;
    case types.HANDLE_STAFFCANDIDATE:
        return action.data.candidate;
    default:
        return state; 
    }
}





