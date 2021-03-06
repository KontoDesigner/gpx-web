import { ActionTypes as types } from '../../../constants/staff/active/headOfConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getHeadOfSuccess(headOf) {
    return {
        type: types.GET_HEADOF_SUCCESS,
        data: { headOf: headOf }
    }
}

export function getHeadOf(sourcemarket = 'ALL', jobfamily = 'ALL', criteria = null) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const headOf = await RestClient.Get(`staff/headof/${sourcemarket}/${jobfamily}/${criteria !== null ? `${criteria}` : ''}`)

            dispatch(getHeadOfSuccess(headOf))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function handleHeadOf(headOf) {
    return {
        type: types.HANDLE_HEADOF,
        data: { headOf: headOf }
    }
}
