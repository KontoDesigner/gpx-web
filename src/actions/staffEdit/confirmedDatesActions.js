import { ActionTypes as types } from '../../constants/staffEdit/confirmedDatesConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'

export function getConfirmedDatesSuccess(confirmedDate) {
    return {
      type: types.GET_CONFIRMEDDATES_SUCCESS,
      data: { confirmedDate: confirmedDate }
    }
  }

 
   

 
export function getConfirmedDates(staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {

            const confirmedDate = await RestClient.Get(`staff/getConfirmedDates/${staffId}`)
            debugger;
            dispatch(getConfirmedDatesSuccess(confirmedDate))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}