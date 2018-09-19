import { ActionTypes as types } from '../../../constants/planning/planning/placedRolesConstants';

var defaultState = [];

export default function allRolesReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_ALLROLES_SUCCESS:
            return action.data.allRoles;
        case types.HANDLE_ALLROLES:
            return action.data.allRoles;
        default:
            return state;
    }
}