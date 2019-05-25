import { ActionTypes as types } from '../../../constants/application/planToResignApplication/planToResignApplicationConstants';

var defaultState = [];

export default function planToResignApplicationReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_PLANTORESIGNAPPLICATION_SUCCESS:
            return action.data.planToResignApplication;
        case types.HANDLE_PLANTORESIGNAPPLICATION:
            return action.data.planToResignApplication;

        default:
            return state;
    }
} 