import { ActionTypes as types } from '../constants/footerConstants';

var defaultState = {
    version: '',
    supportEmail: '',
    wikiUrl: ''
};

export default function footerReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_VERSION_SUCCESS:
            return {
                ...state,
                version: action.data.version
            }
        case types.GET_SUPPORTEMAIL_SUCCESS:
            return {
                ...state,
                supportEmail: action.data.supportEmail
            }
        case types.GET_WIKIURL_SUCCESS:
            return {
                ...state,
                wikiUrl: action.data.wikiUrl
            }
        default:
            return state;
    }
}
