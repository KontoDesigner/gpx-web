import { ActionTypes as types } from '../../constants/setting/settingConstants';

var defaultState = {
    setting: [],
    jobFamilies: [],
    
}

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
      

            case types.GET_JOBFAMILIES_SUCCESS:
            return {
                ...state,
                jobFamilies: action.data.jobFamilies
            }

            case types.GET_SETTING_SUCCESS:
            return {
                ...state,
                setting: action.data.setting
            }
     
        default:
            return state
    }
}
