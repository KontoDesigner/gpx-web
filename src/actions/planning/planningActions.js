import { ActionTypes as types } from '../../constants/planning/planningConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'
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

export function deletePositionAssign(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

         try {
           const modelnew = {

             }
            
       

           const res= await RestClient.Post('positionassign/deletepositionassignselect', model.StaffID)

           if (res) {
            toastr.success('Success', `Selected staff was assigned to position`)
        } else {
            toastr.error('Error', `Selected staff was not assigned to position: ${res ? res.message : 'Error'}`)
        }

         
            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function insertStaffAssign(positionAssign) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            debugger;
            await RestClient.Post('positionassign', positionAssign)

            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
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

