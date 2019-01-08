import { ActionTypes as types } from '../../constants/staffEdit/cvConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'

export function handleStaffSelect(val) {
    debugger;
       return {
           
          type: types.HANDLE_STAFF_SELECT,
           data: { val: val }
   
   
         
       }
   }

export function handleStaffField(field, val) {
    return {
        type: types.HANDLE_STAFF_FIELD,
        data: { field: field, val: val }
    }
}