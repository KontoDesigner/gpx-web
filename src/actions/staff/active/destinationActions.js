import { ActionTypes as types } from '../../../constants/staff/active/destinationConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getDestinationSuccess(destination) {
  return {
    type: types.GET_DESTINATION_SUCCESS,
    data: { destination: destination }
  }
}

export function getDestination(sourcemarket = 'ALL', jobtitle='ALL', criteria = null) {
  return async function (dispatch) {
    dispatch(beginAjaxCall())

    try {
      const destination = await RestClient.Get(`staff/destination/${sourcemarket}/${jobtitle}${criteria !== null ? `/${criteria}` : ''}`)

      //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
      dispatch(handleDestination([]))

      dispatch(getDestinationSuccess(destination))
    } catch (error) {
      dispatch(ajaxCallError(error))

      throw error
    }
  }
}

export function handleDestination(destination) {
  return {
    type: types.HANDLE_DESTINATION,
    data: { destination: destination }
  }
}