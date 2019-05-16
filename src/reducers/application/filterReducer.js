import { ActionTypes as types } from '../../constants/application/filterConstants'

var defaultState = {
  text: '',
  sourceMarket: null,
  selectedJobFamily: null,
  selectedPositionType: null,
  selectedJobTitle: null,
  selectedJump: null,
  selectedTitle: []
}

export default function filterReducer(state = defaultState, action) {
  switch (action.type) {
    
    case types.HANDLE_SELECTEDTITLE:
      return {
        ...state,
        selectedTitle: action.data.selectedTitle
      }
    case types.HANDLE_FILTER:
      return defaultState
    case types.HANDLE_SOURCEMARKET:
      return { 
        ...state,
        sourceMarket: action.data.sourceMarket
      }
      case types.HANDLE_SELECTEDJOBFAMILY:
      return {
          ...state,
          selectedJobFamily: action.data.selectedJobFamily
      }
      case types.HANDLE_SELECTEDJOBTITLE:
      return { 
        ...state,
        selectedJobTitle: action.data.selectedJobTitle
      }
      case types.HANDLE_SELECTEDJUMP:
      return { 
        ...state,
        selectedJump: action.data.selectedJump
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
