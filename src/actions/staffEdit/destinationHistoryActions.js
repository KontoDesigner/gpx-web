import { ActionTypes as types } from '../../constants/staffEdit/destinationHistoryConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'

export function getDestinationHistorySuccess(destinationHistory) {
    return {
      type: types.GET_DESTINATIONHISTORY_SUCCESS,
      data: { destinationHistory: destinationHistory }
    }
  }

export function getDestinationHistory(staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {

            const destinationHistory = await RestClient.Get(`staff/getStaffDestHistory/${staffId}`)

            dispatch(getDestinationHistorySuccess(destinationHistory))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}