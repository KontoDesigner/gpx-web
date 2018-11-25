import { ActionTypes as types } from '../../constants/staff/staffConstants';

var defaultState = {

   selectedReason: null

} 

export default function staffReducer(state = defaultState, action) {
    switch (action.type) {
        case (types.HANDLE_STAFF_FIELD):
        return {
            ...state,
            selectedReason:action.data.val

        }

        default:
        return state
    }
  }





