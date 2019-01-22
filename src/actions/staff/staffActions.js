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

export function createAbsense(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            debugger;
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
    debugger;
    return {
        type: types.HANDLE_STAFF_FIELD,
        data: { field: field, val: val }
    }
}