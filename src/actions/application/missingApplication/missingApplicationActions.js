import { ActionTypes as types } from '../../../constants/application/missingApplication/missingApplicationConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getMissingApplicationSuccess(missingApplication) {
    return { 
        type: types.GET_MISSINGAPPLICATION_SUCCESS,
        data: { missingApplication: missingApplication }
    } 
}

export function getMissingApplication(sourcemarket = 'ALL', jobfamily = 'ALL',  jobtitle = 'ALL', jump = 'ALL',criteria = null) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
        debugger;
        try { 
        
            // const allRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)
            const missingApplication = await RestClient.Get(`application/missingApplicationData/${sourcemarket}/${jobfamily}/${jobtitle}/${jump}/${criteria !== null ? `${criteria}` : ''}`)
            debugger;

                
                debugger;
            dispatch(getMissingApplicationSuccess(missingApplication))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

// export function handlePostModal(mplID) {
//     return {
//         type: types.HANDLE_POSTMODAL,
//         data: { mplID: mplID }
//     }
// }

export function handleMissingApplication(missingApplication) {
    return {
        type: types.HANDLE_MISSINGAPPLICATION,
        data: { missingApplication: missingApplication }
    }
}
