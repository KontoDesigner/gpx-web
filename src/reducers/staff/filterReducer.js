import { ActionTypes as types } from '../../constants/staff/filterConstants'

var defaultState = {
    text: '',
    sourceMarket: null,
    selectedJobFamily: null,
    selectedStaff: []
}

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
        case types.HANDLE_SELECTEDSTAFF:
            return {
                ...state,
                selectedStaff: action.data.selectedStaff
            }
        case types.HANDLE_SELECTEDJOBFAMILY:
            return {
                ...state,
                selectedJobFamily: action.data.selectedJobFamily
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
