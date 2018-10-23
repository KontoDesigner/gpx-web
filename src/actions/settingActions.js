import { ActionTypes as types } from '../constants/settingConstants';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions'
import RestClient from '../infrastructure/restClient'


export function getJobFamiliesSuccess(jobFamilies) {
    return {
        type: types.GET_JOBFAMILIES_SUCCESS,
        data: { jobFamilies: jobFamilies }
    }
}



export function getJobFamilies() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const jobFamilies = await RestClient.Get(`setting/jobfamily`)

            dispatch(getJobFamiliesSuccess(jobFamilies))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}