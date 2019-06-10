import { ActionTypes as types } from '../../constants/staffEdit/applicationHistoryConstants'

import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'

export function getResignHistorySuccess(resignHistory) {
    return {
      type: types.GET_RESIGNHISTORY_SUCCESS,
      data: { resignHistory: resignHistory }
    }
  }

export function getResignHistory(staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {

            const resignHistory = await RestClient.Get(`staff/getStaffResignHistory/${staffId}`)
debugger;
            dispatch(getResignHistorySuccess(resignHistory))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getApplicationHistory(staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {

            const applicationHistory = await RestClient.Get(`staff/getStaffApplicationHistory/${staffId}`)
debugger;
            dispatch(getApplicationHistorySuccess(applicationHistory))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getApplicationHistorySuccess(applicationHistory) {
    return {
      type: types.GET_APPLICATIONHISTORY_SUCCESS,
      data: { applicationHistory: applicationHistory }
    }
  }

// export function getAbscenseHistorySuccess(abscenseHistory) {
//     return {
//       type: types.GET_ABSCENSEHISTORY_SUCCESS,
//       data: { abscenseHistory: abscenseHistory }
//     }
//   }

// export function getAbscenseHistory(staffId) {
//     return async function(dispatch) {
//         dispatch(beginAjaxCall())

//         try {
            
//             const abscenseHistory = await RestClient.Get(`staff/getStaffAbscenseHistory/${staffId}`)
//             
//             dispatch(getAbscenseHistorySuccess(abscenseHistory))
//         } catch (error) {
//             dispatch(ajaxCallError(error))

//             throw error
//         }
//     }
// }