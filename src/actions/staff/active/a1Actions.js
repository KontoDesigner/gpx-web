import { ActionTypes as types } from '../../../constants/staff/active/a1Constants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getA1Success(a1) {
    return {
        type: types.GET_A1_SUCCESS,
        data: { a1: a1 }
    }
}

export function getA1() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const a1 = await RestClient.Get(`a1`)

            dispatch(getA1Success(a1))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}