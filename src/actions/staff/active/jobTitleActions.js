import { ActionTypes as types } from '../../../constants/staff/active/jobTitleConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getJobTitleSuccess(jobTitle) {
    return {
        type: types.GET_JOBTITLE_SUCCESS,
        data: { jobTitle: jobTitle }
    }
}

//Obsolete  this call is already done in the setting actions
export function getJobTitle(sourcemarket = 'ALL', jobfamily = 'ALL', positiontype='ALL',criteria = null) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const jobTitle = await RestClient.Get(`staff/jobtitle/${sourcemarket}/${jobfamily}/${positiontype}/${criteria !== null ? `${criteria}` : ''}`)

            dispatch(getJobTitleSuccess(jobTitle))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function handleJobTitle(jobTitle) {
    return {
        type: types.HANDLE_JOBTITLE,
        data: { jobTitle: jobTitle }
    }
}
