import { ActionTypes as types } from '../../../constants/staff/active/headOfConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getHeadOfSuccess(headOf) {
    return {
        type: types.GET_HEADOF_SUCCESS,
        data: { headOf: headOf }
    }
}

export function getHeadOf() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const headOf = await RestClient.Get(`XXXXXX`)

            dispatch(getHeadOfSuccess([]))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}