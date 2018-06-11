import { ActionTypes as types } from '../../../constants/staff/active/destinationConstants'

var defaultState = []

export default function destinationReducer(state = defaultState, action) {
  switch (action.type) {
    case types.GET_DESTINATION_SUCCESS:
      return action.data.destination
    default:
      return state
  }
}
