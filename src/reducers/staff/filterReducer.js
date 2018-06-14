import { ActionTypes as types } from '../../constants/staff/filterConstants'

var defaultState = {
  text: '',
  sourceMarket: '',
  sourceMarkets: []
}

export default function filterReducer(state = defaultState, action) {
  switch (action.type) {
    case types.GET_SOURCEMARKETS_SUCCESS:
      return {
        ...state,
        sourceMarkets: action.data.sourceMarkets
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
