import { ActionTypes as types } from '../../constants/staffEdit/abscenseHistoryConstants'

import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'



export function getAbscenseHistorySuccess(abscenseHistory) {
    return {
      type: types.GET_ABSCENSEHISTORY_SUCCESS,
      data: { abscenseHistory: abscenseHistory }
    }
  }

export function getAbscenseHistory(staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            
            const abscenseHistory = await RestClient.Get(`staff/getStaffAbscenseHistory/${staffId}`)
            
            dispatch(getAbscenseHistorySuccess(abscenseHistory))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}