import { ActionTypes as types } from '../../constants/staffEdit/historyConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'

export function getHistorySuccess(history) {
    return {
      type: types.GET_HISTORY_SUCCESS,
      data: { history: history }
    }
  }

export function getHistory(staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {

            const history = await RestClient.Get(`staff/getStaffHistory/${staffId}`)

            dispatch(getHistorySuccess(history))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}