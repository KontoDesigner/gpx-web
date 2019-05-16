import { ActionTypes as types } from '../../constants/application/applicationConstants';

var defaultState = {
    
    //mplpositiontypes: [],
    allApplication:[]

}
export default function applicationReducer(state = defaultState, action) {
    switch (action.type) {

        case types.GET_ALLAPPLICATION_SUCCESS:
        // return action.data.candidate;
        return {
            ...state,
            allApplication: action.data.allApplication 
        }
    case types.HANDLE_ALLAPPLICATION:
        //return action.data.candidate;
        return {
            ...state,
            allApplication: action.data.allApplication
        }
    default:
        return state; 
    }
}





