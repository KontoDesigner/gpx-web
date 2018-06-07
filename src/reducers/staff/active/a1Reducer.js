import { ActionTypes as types } from '../../../constants/staff/active/a1Constants';

var defaultState = [];

export default function a1Reducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_A1_SUCCESS:
            return action.data.a1;
        default:
            return state;
    }
}