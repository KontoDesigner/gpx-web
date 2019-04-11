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

export function getMPLPositionTypes() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const mplpositiontypes = await RestClient.Get(`position/mplpositiontypes`)
debugger;
            dispatch(getMPLPositionTypesSuccess(mplpositiontypes))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    } 

    
}
export function getMPLPositionTypesSuccess(mplpositiontypes) {
    return {
      type: types.GET_MPLPOSITIONTYPES_SUCCESS,
      data: { mplpositiontypes: mplpositiontypes }
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

        try {
            const modelobsolete = {
                Id: model.id
            }
            debugger
            const res = await RestClient.Post('positionassign/markaccept', model)

            if (res) {
                toastr.success('Success', `Selected position(s) is now reset`)
            } else {
                toastr.error('Error', `Selected position(s) is not reset: ${res ? res.message : 'Error'}`)
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

        try {
            const modelobsolete = {
                Id: model.id
            }

            const res = await RestClient.Post('positionassign/markaccept', model)

            if (res) {
                toastr.success('Success', `Selected position assign (s) is now accepted`)
            } else {
                toastr.error('Error', `Selected position assign(s) is : ${res ? res.message : 'Error'}`)
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

        try {
            const modelobsolete = {
                Id: model.id
            }

            const res = await RestClient.Post('positionassign/markaccept', model)

            if (res) {
                toastr.success('Success', `Selected assignment is now marked as declined`)
            } else {
                toastr.error('Error', `Selected assignment is not marked as declined: ${res ? res.message : 'Error'}`)
            }

            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
export function createRemovePosition(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
            // const res = await RestClient.Post(`staff/removestaff/${model.StaffID}`)
            const res = await RestClient.Post('position/removeposition', model.MPLID)
            debugger
            //const res = await RestClient.Post('abscense/abscenseuser', model)

            dispatch(endAjaxCall())

            if (res) {
                toastr.success('Success', `Selected position was deleted`)
            } else {
                toastr.error('Error', `Selected position was not deleted: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function createRemovePositionSelect(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
            // const res = await RestClient.Post(`staff/removestaff/${model.StaffID}`)
            const res = await RestClient.Post('position/removepositionselect', model.MPLID)
            debugger;
            //const res = await RestClient.Post('abscense/abscenseuser', model)

            dispatch(endAjaxCall())

            //  if (res) {
            //     toastr.success('Success', `Selected position was deleted`)
            //  } else {
            //     toastr.error('Error', `Selected position was not deleted: ${res ? res.message : 'Error'}`)
            //  }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function createPosition(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const modelobsolete = {
                Id: model.id
            }
            debugger
            const res = await RestClient.Post('position/createPosition', model)

            if (res) {
                toastr.success('Success', `Position(s) is now created`)
            } else {
                toastr.error('Error', `Position(s) is not created: ${res ? res.message : 'Error'}`)
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

        try {
            const modelobsolete = {
                Id: model.id
            }

            const res = await RestClient.Post('positionassign/makevacant', model)

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

        try {
            const modelobsolete = {
                Id: model.id
            }

            const res = await RestClient.Post('position/markacting', model)

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

        try {
            const modelobsolete = {
                Id: model.id
            }

            const res = await RestClient.Post('position/updateposition', model)

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
                // StaffID:model.StaffID,
                // OldDates:model.OldDates
            }

            await RestClient.Post('positionassign/deletepositionassignselect', model)

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
            const res = await RestClient.Post('positionassign', positionAssign)

            dispatch(endAjaxCall())

            if (res && res.ok) {
                toastr.success('Success', ` ${res ? res.message : 'Success'}`)
                return true
            } else {
                toastr.error('Position is occupied ', ` ${res ? res.message + ' ' + res.id : ' Not assigned'}`)
                return false
            }
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
            debugger
            const candidate = await RestClient.Get(`staff/GetStaffInitload`)
            debugger

            dispatch(getStaffCandidateSuccess(candidate))

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
