import { ActionTypes as types } from '../../constants/staff/staffConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'


export function createMail(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            debugger;
            const res = await RestClient.Post('mail/sendMailAsync', model)

            dispatch(endAjaxCall())

            if (res) {
                toastr.success('Success', `Selected staff was emailed`)
            } else {
                toastr.error('Error', `Selected staff was not emailed: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    } 
}

export function createImport(type, file) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
            
            //const t res = await RestClient.Post('resign/resignuserselect', model)
           const res = await RestClient.Upload('import/UploadFile/'+ type,file)
            dispatch(endAjaxCall())

            if (res) {
                toastr.success('Success', `GPX - Import routine finished`)
          } else {
                toastr.error('Error', `GPX - Could not Import: ${res ? res.message : 'Error'}`)
            } }catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    } 
}


export function createResign(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            debugger;
            //const res = await RestClient.Post('resign/resignuserselect', model)
            const res = await RestClient.Post('resign/resignuser', model)
            dispatch(endAjaxCall())

            if (res) {
                toastr.success('Success', `Selected staff was resigned`)
            } else {
                toastr.error('Error', `Selected staff was not resigned: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    } 
}

export function createReResignStaff(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
           
           // const res = await RestClient.Post(`staff/removestaff/${model.StaffID}`)
            const res= await RestClient.Post('staff/reresignstaff', model.StaffID)
            //const res = await RestClient.Post('abscense/abscenseuser', model)
            debugger;
            dispatch(endAjaxCall())

            if (res) {
                toastr.success('Success', `Selected staff was ReResigned and set as Active`)
            } else {
                toastr.error('Error', `Selected staff was not ReResigned: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    } 
}

export function createRemoveStaff(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
           
           // const res = await RestClient.Post(`staff/removestaff/${model.StaffID}`)
            const res= await RestClient.Post('staff/removestaff', model.StaffID)
            //const res = await RestClient.Post('abscense/abscenseuser', model)
            debugger;
            dispatch(endAjaxCall())

            if (res) {
                toastr.success('Success', `Selected staff was moved to archive`)
            } else {
                toastr.error('Error', `Selected staff was not moved to archive: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    } 
}

export function createAbsense(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            
            const res = await RestClient.Post('abscense/abscenseuser', model)
            //const res = await RestClient.Post('abscense/abscenseuser', model)

            dispatch(endAjaxCall())

            if (res) {
                toastr.success('Success', `Selected staff was abscensed`)
            } else {
                toastr.error('Error', `Selected staff was not abscensed: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    } 
}

export function handleStaffField(field, val) {
    
    return {
        type: types.HANDLE_STAFF_FIELD,
        data: { field: field, val: val }
    }
}