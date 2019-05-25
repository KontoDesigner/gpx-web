import { ActionTypes as types } from '../../constants/application/applicationConstants';

var defaultState = {
    
    //mplpositiontypes: [],
    allApplication:[],
    planToResignApplication:[],
    missingManagerCommentsApplication:[],
    missingApplication:[]

}
export default function applicationReducer(state = defaultState, action) {
    switch (action.type) {

        case types.GET_PLANTORESIGNAPPLICATION_SUCCESS:
        // return action.data.candidate;
        return {
            ...state,
            planToResignApplication: action.data.planToResignApplication 
        }

        case types.GET_MISSINGAPPLICATION_SUCCESS:
        // return action.data.candidate;
        return {
            ...state,
            missingApplication: action.data.missingApplication 
        }

        case types.GET_MISSINGMANAGERCOMMENTSAPPLICATION_SUCCESS:
        // return action.data.candidate;
        return {
            ...state,
            missingManagerCommentsApplication: action.data.missingManagerCommentsApplication 
        }

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
        case types.HANDLE_PLANTORESIGNAPPLICATION: 
        //return action.data.candidate;
        return {
            ...state,
            planToResignApplication: action.data.planToResignApplication
        }

        case types.HANDLE_MISSINGAPPLICATION: 
        //return action.data.candidate;
        return {
            ...state,
            missingApplication: action.data.missingApplication
        }

        case types.HANDLE_MISSINGMANAGERCOMMENTSPPLICATION: 
        //return action.data.candidate;
        return {
            ...state, 
            missingManagerCommentsApplication: action.data.missingManagerCommentsApplication
        }
    default:
        return state; 
    }
}





