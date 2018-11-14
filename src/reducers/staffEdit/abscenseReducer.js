import { ActionTypes as types } from '../../constants/staffEdit/abscenseConstants';

var defaultState = [];

export default function allRolesReducer(state = defaultState, action) {
    switch (action.type) {
        case (types.HANDLE_STAFF_FIELD):
            return {
                ...state, 
                staff: {
                    ...state.staff,
                    [action.data.field]: action.data.val
                },
            }
        case types.GET_ALLROLES_SUCCESS:
            return action.data.allRoles;
        case types.HANDLE_ALLROLES:
            return action.data.allRoles;
        default:
            return state;
    }
} 