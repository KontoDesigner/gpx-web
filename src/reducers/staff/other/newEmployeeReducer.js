import { ActionTypes as types } from '../../../constants/staff/other/newEmployeeConstants'

var defaultState = [];

export default function newEmployeeReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_NEWEMPLOYEE_SUCCESS:
            return action.data.newEmployee;
        case types.HANDLE_NEWEMPLOYEE:
            return action.data.newEmployee;
        default:
            return state;
    }
} 