import { ActionTypes as types } from '../../constants/staff/staffConstants';

var defaultState = [];

export default function staffReducer(state = defaultState, action) {
    switch (action.type) {
        case types.RESET_STAFF:
            return action.data.staff;
        default:
            return state;
    }
}