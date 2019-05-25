import { ActionTypes as types } from '../../../constants/application/missingManagerCommentsApplication/missingManagerCommentsApplicationConstants';

var defaultState = [];

export default function missingManagerCommentsApplicationReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_MISSINGMANAGERCOMMENTSAPPLICATION_SUCCESS:
            return action.data.missingManagerCommentsApplication;
        case types.HANDLE_MISSINGMANAGERCOMMENTSAPPLICATION:
            return action.data.missingManagerCommentsApplication;

        default:
            return state; 
    }
} 