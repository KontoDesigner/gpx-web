import { ActionTypes as types } from '../../constants/notificationEdit/notificationInfoConstants';

var defaultState = {
    notification: null,
    
    
    
}

export default function notificationInfoReducer(state = defaultState, action) {

    switch (action.type) {
        
        case (types.HANDLE_STAFF_FIELD):
        return {
            ...state,
            notification: {
                ...state.notification,
                [action.data.field]: action.data.val
            },
        }
        case types.GET_NOTIFICATION_SUCCESS: 
            return {
                ...state,
                notification: action.data.notification
            }
        default:
            return state;
    }
}
