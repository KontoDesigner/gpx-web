import { ActionTypes as types } from '../../constants/applicationEdit/applicationInfoConstants';
//var defaultState = [];          

 var defaultState = {
// // currentAvailablePositions: [],
// // nextAvailablePositions: [],
// //     // followingAvailablePositions: [],
// //     // currentPositionAssign: null,
// //     // nextPositionAssign: null,
// //     // followingPositionAssign: null,
     application: [],
    //applicationInfo: [],
     workHistory: []
 }
export default function applicationInfoReducer(state = defaultState, action) {

    switch (action.type) {
      
        case types.GET_APPLICATION_SUCCESS:
            return {
                ...state,
                application: action.data.application
            }
      
            case types.GET_WORKHISTORY_SUCCESS:
                return {
                    ...state,
                    workHistory: action.data.workHistory
                }
      

             case (types.HANDLE_APPLICATION_FIELD):
             console.log(action.data);
            return {
                ...state, 
                application: {
                    ...state.application,
                     [action.data.field]: action.data.val 
                },
            }


        default:
            return state;
    }
}