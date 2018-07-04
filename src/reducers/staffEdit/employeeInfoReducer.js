import { ActionTypes as types } from '../../constants/staffEdit/employeeInfoConstants';

var defaultState = {
    currentAvailablePositions: [],
    nextAvailablePositions: [],
    followingAvailablePositions: [],
    currentPositionAssign: undefined,
    nextPositionAssign: undefined,
    followingPositionAssign: undefined,
    staff: null
}

export default function employeeInfoReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_AVAILABLEPOSITIONS_SUCCESS:
            return {
                ...state,
                currentAvailablePositions: action.data.availablePositions.currentAvailablePositions,
                nextAvailablePositions: action.data.availablePositions.nextAvailablePositions,
                followingAvailablePositions: action.data.availablePositions.followingAvailablePositions
            }
        case types.GET_POSITIONASSIGNS_SUCCESS:
            return {
                ...state,
                currentPositionAssign: action.data.positionAssigns[0],
                nextPositionAssign: action.data.positionAssigns[1],
                followingPositionAssign: action.data.positionAssigns[2]
            }
        case types.GET_STAFF_SUCCESS:
            return {
                ...state,
                staff: action.data.staff
            }
        default:
            return state;
    }
}