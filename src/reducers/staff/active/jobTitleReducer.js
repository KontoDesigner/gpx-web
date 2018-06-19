import { ActionTypes as types } from '../../../constants/staff/active/jobTitleConstants'

var defaultState = []

export default function headOfReducer(state = defaultState, action) {
  switch (action.type) {
    case types.GET_JOBTITLE_SUCCESS:
      return action.data.jobTitle
    case types.HANDLE_JOBTITLE:
      return action.data.jobTitle
    default:
      return state
  }
}
