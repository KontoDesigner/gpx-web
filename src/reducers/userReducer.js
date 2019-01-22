import { ActionTypes as types } from '../constants/userConstants'

var defaultState = null

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return action.data.user
        default:
            return state
    }
}
