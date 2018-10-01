import { ActionTypes as types } from '../../../constants/planning/planning/placedRolesConstants';

var defaultState = [];

export default function placedRolesReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_PLACEDROLES_SUCCESS:
            return action.data.placedRoles;
        case types.HANDLE_PLACEDROLES:
            return action.data.placedRoles;
        default:
            return state;
    }
}