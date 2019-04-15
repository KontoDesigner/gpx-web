import { ActionTypes as types } from '../../constants/staffEdit/flightRequestHistoryConstants'
import { beginAjaxCall, ajaxCallError } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'

export function getFlightRequestHistorySuccess(flightRequestHistory) {
    return {
        type: types.GET_FLIGHTREQUESTHISTORY_SUCCESS,
        data: { flightRequestHistory }
    }
}

export function getFlightRequestHistory(staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const flightRequestHistory = await RestClient.Get(`flightrequesthistory/getbystaffid/${staffId}`)

            dispatch(getFlightRequestHistorySuccess(flightRequestHistory))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
