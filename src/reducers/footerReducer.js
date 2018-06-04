import { ActionTypes as types } from '../constants/footerConstants';

var defaultState = {
    version: '',
    supportEmail: ''
};

export default function footerReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_VERSION_SUCCESS:
            return {
                ...state,
                version: action.data.version
            }
        case types.GET_SUPPORT_EMAIL_SUCCESS:
            return {
                ...state,
                supportEmail: action.data.supportEmail
            }
        default:
            return state;
    }
}
