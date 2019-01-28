import { ActionTypes as types } from '../../../constants/planning/planning/allRolesConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getAllRolesSuccess(allRoles) {
  return {
    type: types.GET_ALLROLES_SUCCESS,
    data: { allRoles: allRoles }
  }
}

export function getAllRoles(sourcemarket = 'ALL', jobfamily='ALL', criteria = null) {
  return async function (dispatch) {
    dispatch(beginAjaxCall())
debugger;
    try {
      
     // const allRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)
      const allRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData/${sourcemarket}/${jobfamily}/${criteria !== null ? `${criteria}` : ''}`)
      
      //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
      dispatch(handleAllRoles([]))

      dispatch(getAllRolesSuccess(allRoles))
    } catch (error) { 
      dispatch(ajaxCallError(error))

      throw error
    }
  }
}

export function handlePostModal(mplID) {
  return {
    type: types.HANDLE_POSTMODAL,
    data: { mplID: mplID }
  }
}


export function handleAllRoles(allRoles) {
  return {
    type: types.HANDLE_ALLROLES,
    data: { allRoles: allRoles }
  }
}