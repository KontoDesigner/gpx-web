import { ActionTypes as types } from '../../../constants/staff/active/nameConstants';

var defaultState = [];

export default function nameReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_NAME_SUCCESS:
            return action.data.name;
        case types.HANDLE_NAME:
            return action.data.name;
        default:
            return state; 
    }
}