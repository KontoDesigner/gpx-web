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

            const resignHistory = await RestClient.Get(`staff/getStaffApplicationHistory/${staffId}`)

            dispatch(getResignHistorySuccess(resignHistory))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}