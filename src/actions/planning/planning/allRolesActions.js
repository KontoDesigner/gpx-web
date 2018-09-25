import { ActionTypes as types } from '../../../constants/planning/planning/allRolesConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getAllRolesSuccess(allRoles) {
  return {
    type: types.GET_ALLROLES_SUCCESS,
    data: { allRoles: allRoles }
  }
}

export function getAllRoles(sourcemarket = 'ALL', criteria = null) {
  return async function (dispatch) {
    dispatch(beginAjaxCall())

    try {
      const allRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

      //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
      dispatch(handleAllRoles([]))

      dispatch(getAllRolesSuccess(allRoles))
    } catch (error) { 
      dispatch(ajaxCallError(error))

      throw error
    }
  }
}

export function handleAllRoles(allRoles) {
  return {
    type: types.HANDLE_ALLROLES,
    data: { allRoles: allRoles }
  }
}
