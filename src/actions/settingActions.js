import { ActionTypes as types } from '../constants/geographyConstants';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions'
import RestClient from '../infrastructure/restClient'


export function getJobTitlesSuccess(jobTitles) {
    return {
        type: types.GET_JOBTITLES_SUCCESS,
        data: { jobTitles: jobTitles }
    }
}



export function getJobTitles() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const jobTitles = await RestClient.Get(`setting/jobtitle`)

            dispatch(getJobTitlesSuccess(jobTitles))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}