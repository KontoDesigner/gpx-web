import { ActionTypes as types } from '../../constants/notification/notificationConstants';

var defaultState = {
    setting: [],
    jobFamilies: [],
    
}

export default function notificationReducer(state = defaultState, action) {
    switch (action.type) {
      

            case types.GET_NOTIFICATION_SUCCESS:
            return {
                ...state,
                notification: action.data.notification
            }

        
     
        default:
            return state
    }
}
