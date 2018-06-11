import { ActionTypes as types } from '../../constants/staff/filterConstants';

var defaultState = {
    text: ''
};

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
        case (types.HANDLE_FILTER):
            return defaultState
        case types.HANDLE_TEXT:
            return {
                ...state,
                text: action.data.text
            }
        default:
            return state;
    }
}