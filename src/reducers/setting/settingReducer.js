import { ActionTypes as types } from '../../constants/setting/settingConstants';

var defaultState = {
    setting:{},
    selectedApplyOpen: null,
    jobFamilies: [],
    jobTitle: []
    
}

export default function settingReducer(state = defaultState, action) {
    switch (action.type) {
        case (types.HANDLE_APPLYOPEN):
        return {
            ...state,
            selectedApplyOpen:action.data.val

        }

        case (types.HANDLE_SETTING_FIELD):
        return {
            ...state,
            setting: {
                ...state.setting,
                [action.data.field]: action.data.val
            },
        }

        case types.HANDLE_SETTING:
        return action.data.setting;
            case types.GET_JOBFAMILIES_SUCCESS:
            return {
                ...state,
                jobFamilies: action.data.jobFamilies
            }

            case types.GET_ALLJOBTITLE_SUCCESS:
            return {
                ...state,
                jobTitle: action.data.jobTitle
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
