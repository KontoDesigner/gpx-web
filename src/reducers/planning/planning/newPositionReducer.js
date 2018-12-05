import { ActionTypes as types } from '../../../constants/planning/planning/newPositionConstants'

var defaultState = []

export default function newPositionReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_NEWPOSITION_SUCCESS:
            return action.data.newPosition;
            case types.HANDLE_NEWPOSITION:
            return action.data.newPosition;
        default:
            return state
    }
}
