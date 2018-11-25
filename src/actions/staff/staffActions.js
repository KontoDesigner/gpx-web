import { ActionTypes as types } from '../../constants/staff/staffConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'

export function createAbsense(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const res = await RestClient.Post('abscense/abscenseuser', model)

            dispatch(endAjaxCall())

            if (res && res.ok) {
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