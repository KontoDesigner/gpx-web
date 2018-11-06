import { ActionTypes as types } from '../../constants/notificationEdit/notificationInfoConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'



export function handleStaffField(field, val) {

    return {
        type: types.HANDLE_STAFF_FIELD,
        data: { field: field, val: val }
    }
}

export function handleFilterFromSuccess(from) {
    return {
        type: types.HANDLE_FILTER_FROM,
        data: { from: from }
    }
}



// export function getStaffSuccess(staff) {
//     return {
//         type: types.GET_STAFF_SUCCESS,
//         data: { staff: staff }
//     }
// }

// export function getStaff(staffId) {
//     return async function (dispatch) {
//         dispatch(beginAjaxCall())

//         try {
          
//         //   const staff = await RestClient.Get(`position/${mplID}`)
     
//             const staff = await RestClient.Get(`staff/${staffId}`)

//             dispatch(getStaffSuccess(staff))
//         } catch (error) {
//             dispatch(ajaxCallError(error))

//             throw error
//         }
//     }
// }

export function getNotificationSuccess(notification) {
    return {
        type: types.GET_NOTIFICATION_SUCCESS,
        data: { notification: notification }
    }
}

export function getNotification(templatename) {
    console.log('Templatename', templatename);
    return async function (dispatch) {
        dispatch(beginAjaxCall())
        try {

         //  const staff = await RestClient.Get(`staff/${staffId}`)
    
           const notification = await RestClient.Get(`mail/${templatename}`)
       
          
            dispatch(getNotificationSuccess(notification))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
