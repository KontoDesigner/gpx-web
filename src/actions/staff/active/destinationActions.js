import { ActionTypes as types } from '../../../constants/staff/active/destinationConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getDestinationSuccess(destination) {
  return {
    type: types.GET_DESTINATION_SUCCESS,
    data: { destination: destination }
  }
}

export function getDestination() {
  return async function(dispatch) {
    dispatch(beginAjaxCall())
    try {
      const destination = await RestClient.Get(`staff/destination`)
      dispatch(getDestinationSuccess(destination))
    } catch (error) {
      dispatch(ajaxCallError(error))
      throw error
    }
  }
}
