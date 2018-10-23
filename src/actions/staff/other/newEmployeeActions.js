import { ActionTypes as types } from '../../../constants/staff/other/newEmployeeConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getNewEmployeeSuccess(newEmployee) {
  return {
    type: types.GET_NEWEMPLOYEE_SUCCESS,
    data: { newEmployee: newEmployee }
  }
}

export function getNewEmployee(sourcemarket = 'ALL', jobfamily='ALL', criteria = null) {
  return async function (dispatch) {
    dispatch(beginAjaxCall())

    try {
      
      const newEmployee = await RestClient.Get(`staff/newemployee/${sourcemarket}/${jobfamily}${criteria !== null ? `/${criteria}` : ''}`)
      
      //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
      dispatch(handleNewEmployee([]))

      dispatch(getNewEmployeeSuccess(newEmployee))
    } catch (error) {
      dispatch(ajaxCallError(error))

      throw error
    }
  }
} 
 
export function handleNewEmployee(newEmployee) {
  return {
    type: types.HANDLE_NEWEMPLOYEE,
    data: { newEmployee: newEmployee }
  }
}
