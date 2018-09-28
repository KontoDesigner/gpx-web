import { ActionTypes as types } from '../../constants/planning/filterConstants'

var defaultState = {
  text: '',
  sourceMarket: null,
  selectedTitle: []
}

export default function filterReducer(state = defaultState, action) {
  switch (action.type) {
    case types.HANDLE_SELECTEDTITLE:
      return {
        ...state,
        selectedStaff: action.data.selectedTitle
      }
    case types.HANDLE_FILTER:
      return defaultState
    case types.HANDLE_SOURCEMARKET:
      return { 
        ...state,
        sourceMarket: action.data.sourceMarket
      }
    case types.HANDLE_TEXT:
      return {
        ...state,
        text: action.data.text
      }
    default:
      return state
  }
}
