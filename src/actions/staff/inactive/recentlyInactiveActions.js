import { ActionTypes as types } from '../../../constants/staff/inactive/recentlyInactiveConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getRecentlyInactiveSuccess(recentlyInactive) {
  return {
    type: types.GET_RECENTLYINACTIVE_SUCCESS,
    data: { recentlyInactive: recentlyInactive }
  }
}

export function getRecentlyInactive(sourcemarket = 'ALL', jobfamily='ALL', criteria = null) {
 
  return async function (dispatch) {
    dispatch(beginAjaxCall())

    try {
     
      const recentlyInactive = await RestClient.Get(`staff/inactive/${sourcemarket}/${jobfamily}${criteria !== null ? `/${criteria}` : ''}`)
 
      //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
      dispatch(handleRecentlyInactive([]))

      dispatch(getRecentlyInactiveSuccess(recentlyInactive))
    } catch (error) {
      dispatch(ajaxCallError(error))
 
      throw error
    }
  }
}

export function handleRecentlyInactive(recentlyInactive) {
  return {
    type: types.HANDLE_RECENTLYINACTIVE,
    data: { recentlyInactive: recentlyInactive }
  }
}