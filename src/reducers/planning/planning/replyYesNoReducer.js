import { ActionTypes as types } from '../../../constants/planning/planning/replyYesNoRolesConstants';

var defaultState = [];

export default function replyYesNoRolesReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_REPLYYESNOROLES_SUCCESS:
            return action.data.replyYesNoRoles;
        case types.HANDLE_YESNOROLES:
            return action.data.replyYesNoRoles;
        default:
        
            return state;
    }
}