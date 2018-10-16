import { ActionTypes as types } from '../../constants/planningEdit/planningInfoConstants'
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



export function getStaffSuccess(staff) {
    return {
        type: types.GET_STAFF_SUCCESS,
        data: { staff: staff }
    }
}

export function getStaff(staffId) {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
          
        //   const staff = await RestClient.Get(`position/${mplID}`)
     
            const staff = await RestClient.Get(`staff/${staffId}`)

            dispatch(getStaffSuccess(staff))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getPositionSuccess(position) {
    return {
        type: types.GET_POSITION_SUCCESS,
        data: { position: position }
    }
}

export function getPosition(mplId) {
    return async function (dispatch) {
        dispatch(beginAjaxCall())
        try {
 
         //  const staff = await RestClient.Get(`staff/${staffId}`)
        
           const position = await RestClient.Get(`position/${mplId}`)
       
          
            dispatch(getPositionSuccess(position))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
