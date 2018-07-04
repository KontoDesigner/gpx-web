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
        case (types.HANDLE_STAFF_FIELD):
            return {
                ...state,
                staff: {
                    ...state.staff,
                    [action.data.field]: action.data.val
                },
            }
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
                currentPositionAssign: action.data.positionAssigns.currentPositionAssign,
                nextPositionAssign: action.data.positionAssigns.nextPositionAssign,
                followingPositionAssign: action.data.positionAssigns.followingPositionAssign
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