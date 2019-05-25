import { ActionTypes as types } from '../../../constants/application/missingApplication/missingApplicationConstants';

var defaultState = [];

export default function missingApplicationReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_MISSINGAPPLICATION_SUCCESS:
            return action.data.missingApplication;
        case types.HANDLE_MISSINGAPPLICATION:
            return action.data.missingApplication;

        default:
            return state;
    }
} 