import { ActionTypes as types } from '../constants/settingConstants'

var defaultState = {

    jobFamilies: [],
    
}

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
      

            case types.GET_JOBFAMILIES_SUCCESS:
            return {
                ...state,
                jobFamilies: action.data.jobFamilies
            }
     
        default:
            return state
    }
}
