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

export function createAccept(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
             const modelobsolete = {
                  Id: model.id
        }
debugger;
           const res= await RestClient.Post('positionassign/markaccept', model)
        
       
            if (res) {
                toastr.success('Success', `Selected position(s) is now marked/unmarked as acting`)
            } else {
                toastr.error('Error', `Selected position(s) is not marked/unmarked as acting: ${res ? res.message : 'Error'}`)
            }



            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function createResetAccept(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
             const modelobsolete = {
                  Id: model.id
        }
debugger;
           const res= await RestClient.Post('positionassign/markaccept', model)
        
       
            if (res) {
                toastr.success('Success', `Selected position assign (s) is now resetted`)
            } else {
                toastr.error('Error', `Selected position assign(s) is not resetted: ${res ? res.message : 'Error'}`)
            }



            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}


export function createDecline(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
             const modelobsolete = {
                  Id: model.id
        }
debugger;
           const res= await RestClient.Post('positionassign/markaccept', model)
        
       
            if (res) {
                toastr.success('Success', `Selected assigns is now marked as declined`)
            } else {
                toastr.error('Error', `Selected assigns is not marked as declined: ${res ? res.message : 'Error'}`)
            }



            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}




export function createVacant(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
             const modelobsolete = {
                  Id: model.id
        }
debugger;
           const res= await RestClient.Post('positionassign/makevacant', model)
        
       
            if (res) {
                toastr.success('Success', `Selected position(s) is now vacant`)
            } else {
                toastr.error('Error', `Selected position(s) is not vacant: ${res ? res.message : 'Error'}`)
            }



            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}


export function createActing(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
             const modelobsolete = {
                  Id: model.id
        }
debugger;
           const res= await RestClient.Post('position/markacting', model)
        
       
            if (res) {
                toastr.success('Success', `Selected position(s) is now marked/unmarked as acting`)
            } else {
                toastr.error('Error', `Selected position(s) is not marked/unmarked as acting: ${res ? res.message : 'Error'}`)
            }



            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}


export function createUpdate(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
             const modelobsolete = {
                  Id: model.id
        }
debugger;
           const res= await RestClient.Post('position/updateposition', model)
        
       
            if (res) {
                toastr.success('Success', `Selected position(s) is now updated`)
            } else {
                toastr.error('Error', `Selected position(s) is not updated: ${res ? res.message : 'Error'}`)
            }



            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function deletePositionAssign(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

         try {
           const modelnew = {

             }
            
             await RestClient.Post('positionassign/deletepositionassignselect', model.StaffID)
         
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
           const res= RestClient.Post('positionassign', positionAssign)

            
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

