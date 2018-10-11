import { ActionTypes as types } from '../../../constants/staff/inactive/recentlyInactiveConstants'

var defaultState = [];

export default function recentlyInactiveReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_RECENTLYINACTIVE_SUCCESS:
            return action.data.recentlyInactive;
        case types.HANDLE_RECENTLYINACTIVE:
            return action.data.recentlyInactive;
        default:
            return state;
    }
} 