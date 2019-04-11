import { ActionTypes as types } from '../../constants/planning/planningConstants';

var defaultState = {
    
    mplpositiontypes: [],
    candidate:[]

}
export default function candidateReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_MPLPOSITIONTYPES_SUCCESS:
        return {
            ...state,
            mplpositiontypes: action.data.mplpositiontypes
        }
        
 
        case types.GET_STAFFCANDIDATE_SUCCESS:
        // return action.data.candidate;
        return {
            ...state,
            candidate: action.data.candidate
        }
    case types.HANDLE_STAFFCANDIDATE:
        //return action.data.candidate;
        return {
            ...state,
            candidate: action.data.candidate
        }
    default:
        return state; 
    }
}





