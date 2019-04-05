import { ActionTypes as types } from '../../../constants/staff/active/nameConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getNameSuccess(name) {
    return {
        type: types.GET_NAME_SUCCESS,
        data: { name: name }
    }
}

export function getName(sourcemarket = 'ALL', jobfamily = 'ALL', criteria = null) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            debugger
            const name = await RestClient.Get(`staff/name/${sourcemarket}/${jobfamily}/${criteria !== null ? `${criteria}` : ''}`)

            dispatch(getNameSuccess(name))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function handleName(name) {
    return {
        type: types.HANDLE_NAME,
        data: { name: name }
    }
}
