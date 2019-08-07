import { ActionTypes as types } from '../../constants/staffEdit/employeeInfoConstants';

var defaultState = {
    currentAvailablePositions: [],
    nextAvailablePositions: [],
    followingAvailablePositions: [],
    nextFollowingAvailablePositions: [],
    currentPositionAssign: null,
    nextPositionAssign: null,
    followingPositionAssign: null,
    nextFollowingPositionAssign: null,
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
        case (types.HANDLE_CURRENTPOSITIONASSIGN_FIELD):
            return {
                ...state,
                currentPositionAssign: {
                    ...state.currentPositionAssign,
                    [action.data.field]: action.data.val
                },
            }
        case (types.HANDLE_NEXTPOSITIONASSIGN_FIELD):
            return {
                ...state,
                nextPositionAssign: {
                    ...state.nextPositionAssign,
                    [action.data.field]: action.data.val
                },
            }
        case (types.HANDLE_FOLLOWINGPOSITIONASSIGN_FIELD):
            return {
                ...state,
                followingPositionAssign: {
                    ...state.followingPositionAssign,
                    [action.data.field]: action.data.val
                },
            }
            case (types.HANDLE_NEXTFOLLOWINGPOSITIONASSIGN_FIELD):
                return {
                    ...state,
                    nextFollowingPositionAssign: {
                        ...state.nextFollowingPositionAssign,
                        [action.data.field]: action.data.val
                    },
                } 
        case types.GET_AVAILABLEPOSITIONS_SUCCESS:
            return {
                ...state,
                currentAvailablePositions: action.data.availablePositions.currentAvailablePositions,
                nextAvailablePositions: action.data.availablePositions.nextAvailablePositions,
                followingAvailablePositions: action.data.availablePositions.followingAvailablePositions,
                nextFollowingAvailablePositions: action.data.availablePositions.nextFollowingAvailablePositions
            }
        case types.GET_POSITIONASSIGNS_SUCCESS:
            return {
                ...state,
                currentPositionAssign: action.data.positionAssigns.currentPositionAssign,
                nextPositionAssign: action.data.positionAssigns.nextPositionAssign,
                followingPositionAssign: action.data.positionAssigns.followingPositionAssign,
                nextFollowingPositionAssign: action.data.positionAssigns.nextFollowingPositionAssign
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