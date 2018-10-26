import { ActionTypes as types } from '../../../constants/staff/active/jobTitleConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getJobTitleSuccess(jobTitle) {
  return {
    type: types.GET_JOBTITLE_SUCCESS,
    data: { jobTitle: jobTitle }
  }
}

export function getJobTitle(sourcemarket = 'ALL', jobfamily='ALL', criteria = null) {
  return async function(dispatch) {
    dispatch(beginAjaxCall())

    try {
      const jobTitle = await RestClient.Get(`staff/jobtitle/${sourcemarket}/${jobfamily}/${criteria !== null ? `${criteria}` : ''}`)

      //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
      dispatch(handleJobTitle([]))

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
