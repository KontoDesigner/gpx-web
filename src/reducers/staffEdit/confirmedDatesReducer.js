import { ActionTypes as types } from '../../constants/staffEdit/confirmedDatesConstants';

var defaultState = [];

export default function confirmedDatesReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_CONFIRMEDDATES_SUCCESS:
            return action.data.confirmedDate;
        case types.GET_CONFIRMEDDATES: 
            return action.data.confirmedDate;   
        default:
            return state;
    }
} 