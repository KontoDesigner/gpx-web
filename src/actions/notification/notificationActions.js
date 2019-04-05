import { ActionTypes as types } from '../../constants/notification/notificationConstants'
import { beginAjaxCall, ajaxCallError } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'

export function handleNotification(notification) {
    return {
        type: types.HANDLE_NOTIFICATION,
        data: { notification: notification }
    }
}

export function getNotificationSuccess(notification) {
    return {
        type: types.GET_NOTIFICATION_SUCCESS,
        data: { notification: notification }
    }
}

export function getNotification() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const notification = await RestClient.Get(`mail`)
            dispatch(handleNotification([]))
            dispatch(getNotificationSuccess(notification))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
