import { ActionTypes as types } from '../../../constants/planning/planning/newPositionConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getNewPositionSuccess(newPosition) {
  return {
      type: types.GET_NEWPOSITION_SUCCESS,
      data: { newPosition: newPosition }
  }
}

export function getNewPosition() {
  return async function(dispatch) {
      dispatch(beginAjaxCall())

      try { 
          const newPosition = null;
          
          //const replyYesNoRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

          //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
          dispatch(handleNewPosition)

          dispatch(getNewPositionSuccess(newPosition))
      } catch (error) {
          dispatch(ajaxCallError(error))

          throw error
      }
  }
}

export function handleNewPosition(newPosition) {
    return {
      type: types.HANDLE_NEWPOSITION,
      data: {newPosition: newPosition }
    }
  }