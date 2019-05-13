import { ActionTypes as types } from '../../constants/applicationEdit/applicationInfoConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'



export function handleStaffField(field, val) {
    return {
        type: types.HANDLE_STAFF_FIELD,
        data: { field: field, val: val }
    }
}

export function handleFilterFromSuccess(from) {
    return {
        type: types.HANDLE_FILTER_FROM,
        data: { from: from }
    }
}



export function getApplicationSuccess(application) {
    return {
        type: types.GET_APPLICATION_SUCCESS,
        data: { application:application }
    }
}

export function getApplication(staffId) {
    return async function (dispatch) { 
        dispatch(beginAjaxCall())

        try {
        
        //   const staff = await RestClient.Get(`position/${mplID}`)
  
            const application = await RestClient.Get(`application/work/${staffId}`)
           
   


            dispatch(endAjaxCall())

            dispatch(getApplicationSuccess(application))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}


