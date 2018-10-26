import { ActionTypes as types } from '../../constants/notification/notificationConstants';

var defaultState = {
    notification: []
    
    
    
}

export default function notificationReducer(state = defaultState, action) {
    switch (action.type) {
      
        case types.GET_NOTIFICATION_SUCCESS:
        return action.data.notification;
    case types.HANDLE_NOTIFICATION:
        return action.data.notification;
    default:
        return state;
    }
}
