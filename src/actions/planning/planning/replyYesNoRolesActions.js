import { ActionTypes as types } from '../../../constants/planning/planning/replyYesNoRolesConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getreplyYesNoRolesSuccess(replyYesNoRoles) {
  return {
    type: types.GET_REPLYYESNOROLES_SUCCESS,
    data: { replyYesNoRoles: replyYesNoRoles }
  }
}

export function getReplyYesNoRoles(sourcemarket = 'ALL', criteria = null) {
  return async function (dispatch) {
    dispatch(beginAjaxCall())

    try {
      const replyYesNoRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

      //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
      dispatch(handleReplyYesNoRoles([]))

      dispatch(getreplyYesNoRolesSuccess(replyYesNoRoles))
    } catch (error) { 
      dispatch(ajaxCallError(error))

      throw error
    }
  }
}

export function handleReplyYesNoRoles(replyYesNoRoles) {
  return {
    type: types.HANDLE_REPLYYESNOROLES,
    data: { replyYesNoRoles: replyYesNoRoles }
  }
}
