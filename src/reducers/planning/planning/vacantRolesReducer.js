import { ActionTypes as types } from '../../../constants/planning/planning/vacantRolesConstants';

var defaultState = [];

export default function vacantRolesReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_VACANTROLES_SUCCESS:
            return action.data.vacantRoles;
        case types.HANDLE_VACANTROLES:
            return action.data.vacantRoles;
        default:
            return state;
    }
}