import { ActionTypes as types } from '../../constants/planningEdit/planningInfoConstants';

var defaultState = {
    // currentAvailablePositions: [],
    // nextAvailablePositions: [],
    // followingAvailablePositions: [],
    // currentPositionAssign: null,
    // nextPositionAssign: null,
    // followingPositionAssign: null,
    position: null
}

export default function planningInfoReducer(state = defaultState, action) {
    switch (action.type) {
      
        case types.GET_POSITION_SUCCESS:
            return {
                ...state,
                position: action.data.position
            }
        default:
            return state;
    }
}