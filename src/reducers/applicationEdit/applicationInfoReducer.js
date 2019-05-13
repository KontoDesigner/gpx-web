import { ActionTypes as types } from '../../constants/applicationEdit/applicationInfoConstants';

var defaultState = {
    // currentAvailablePositions: [],
    // nextAvailablePositions: [],
    // followingAvailablePositions: [],
    // currentPositionAssign: null,
    // nextPositionAssign: null,
    // followingPositionAssign: null,
    application: null
}

export default function applicationInfoReducer(state = defaultState, action) {
    debugger;
    switch (action.type) {
      
        case types.GET_APPLICATION_SUCCESS:
            return {
                ...state,
                application: action.data.application
            }
        default:
            return state;
    }
}