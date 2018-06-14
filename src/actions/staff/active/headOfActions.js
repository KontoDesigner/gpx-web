import { ActionTypes as types } from '../../../constants/staff/active/headOfConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getHeadOfSuccess(headOf) {
  return {
    type: types.GET_HEADOF_SUCCESS,
    data: { headOf: headOf }
  }
}

export function getHeadOf(sourcemarket, criteria) {
  console.log(sourcemarket, criteria)
  return async function(dispatch) {
    dispatch(beginAjaxCall())

    try {
      const headOf = await RestClient.Get(`staff/headof/${sourcemarket}/${criteria}`)

      dispatch(getHeadOfSuccess(headOf))
    } catch (error) {
      dispatch(ajaxCallError(error))

      throw error
    }
  }
}

export function handleHeadOf(headOf) {
  return {
    type: types.HANDLE_HEADOF,
    data: { headOf: headOf }
  }
}
