import { ActionTypes as types } from '../../constants/staff/tabConstants'

var defaultState = []

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
        case types.HANDLE_TABS:
            return action.data.tabs;
        default:
            return state
    }
}
