import { ActionTypes as types } from '../../constants/planning/planningConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'

export function handleStaffCandidate(candidate) {
  return {
    type: types.HANDLE_STAFFCANDIDATE,
    data: { candidate: candidate }
  } 
}

 
export function getStaffCandidateSuccess(candidate) {
  return {
      type: types.GET_STAFFCANDIDATE_SUCCESS,
      data: { candidate: candidate }
  }
}

export function getStaffCandidate() {
  return async function(dispatch) {
      dispatch(beginAjaxCall())

      try {
         
          const candidate= await RestClient.Get(`staff/GetStaffInitload`)
          debugger;
        
       
          dispatch(getStaffCandidateSuccess(candidate))
          dispatch(endAjaxCall())
          if (candidate) {
              //toastr.success('Success', `Selected staff was emailed`)
          } else {
              //toastr.error('Error', `Selected staff was not emailed: ${res ? res.message : 'Error'}`)
          }
      } catch (error) {
          dispatch(ajaxCallError(error))

          throw error
      }
  } 
}

