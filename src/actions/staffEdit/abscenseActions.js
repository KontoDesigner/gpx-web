import { ActionTypes as types } from '../../constants/staffEdit/abscenseConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'



export function handleStaffField(field, val) {
    return {
        type: types.HANDLE_STAFF_FIELD,
        data: { field: field, val: val }
    }
}

