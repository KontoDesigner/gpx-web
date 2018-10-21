import { ActionTypes as types } from '../../../constants/planning/planning/placedRolesConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getPlacedRolesSuccess(placedRoles) {
  return {
    type: types.GET_PLACEDROLES_SUCCESS,
    data: { placedRoles: placedRoles }
  }
}

export function getPlacedRoles(sourcemarket = 'ALL', criteria = null) {
  return async function (dispatch) {
    dispatch(beginAjaxCall())

    try {

      const placedRoles = await RestClient.Get(`positionassign/GetAllAssignedPositions`)
     // const placedRoles = await RestClient.Get(`positionassign/GetAllAssignedPositions/${sourcemarket}/${criteria !== null ? `/${criteria}` : ''}`)
    
      //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
      dispatch(handlePlacedRoles([]))

      dispatch(getPlacedRolesSuccess(placedRoles))
    } catch (error) { 
      dispatch(ajaxCallError(error))

      throw error
    }
  }
}

export function handlePlacedRoles(placedRoles) {
  return {
    type: types.HANDLE_PLACEDROLES,
    data: { placedRoles: placedRoles }
  }
}
