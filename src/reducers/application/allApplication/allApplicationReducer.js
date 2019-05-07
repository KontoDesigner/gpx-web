import { ActionTypes as types } from '../../../constants/application/allApplication/allApplicationConstants';

var defaultState = [];

export default function allApplicationReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_ALLAPPLICATION_SUCCESS:
            return action.data.allApplication;
        case types.HANDLE_ALLAPPLICATION:
            return action.data.allApplication;

        default:
            return state;
    }
} 