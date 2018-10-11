import { ActionTypes as types } from '../constants/settingConstants'

var defaultState = {

    jobTitles: [],
    
}

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
      

            case types.GET_JOBTITLES_SUCCESS:
            return {
                ...state,
                jobTitles: action.data.jobTitles
            }
     
        default:
            return state
    }
}
