import { ActionTypes as types } from '../../constants/staffEdit/flightRequestHistoryConstants'

var defaultState = []

export default function flightRequestHistoryReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_FLIGHTREQUESTHISTORY_SUCCESS:
            return action.data.flightRequestHistory
        default:
            return state
    }
}
