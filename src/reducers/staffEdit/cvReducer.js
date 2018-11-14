import { ActionTypes as types } from '../../constants/staffEdit/cvConstants';

var defaultState = [];

export default function cvReducer(state = defaultState, action) {
    switch (action.type) {
        case (types.HANDLE_STAFF_FIELD):
            return {
                ...state, 
                staff: {
                    ...state.staff,
                    [action.data.field]: action.data.val 
                },
            }
      
        default:
            return state;
    }
} 