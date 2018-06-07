import { ActionTypes as types } from '../../../constants/staff/active/headOfConstants';

var defaultState = [];

export default function headOfReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_HEADOF_SUCCESS:
            return action.data.headOf;
        default:
            return state;
    }
}