import { ActionTypes as types } from '../../../constants/application/missingManagerComments/missingManagerCommentsApplicationConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getMissingManagerCommentsApplicationSuccess(missingManagerCommentsApplication) {
    return { 
        type: types.GET_MISSINGMANAGERCOMMENTSAPPLICATION_SUCCESS, 
        data: { missingManagerCommentsApplication:missingManagerCommentsApplication }
    }
}

export function getMissingManagerCommentsApplication(sourcemarket = 'ALL', jobfamily = 'ALL',  jobtitle = 'ALL', jump = 'ALL',criteria = null) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
        debugger;
        try {
        
            // const allRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)
            const missingManagerCommentsApplication = await RestClient.Get(`application/missingManagerCommentsApplicationData/${sourcemarket}/${jobfamily}/${jobtitle}/${jump}/${criteria !== null ? `${criteria}` : ''}`)
            debugger;

                
                debugger;
            dispatch(getMissingManagerCommentsApplicationSuccess(missingManagerCommentsApplication))
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

export function handleMissingManagerCommentsApplication(missingManagerCommentsApplication) {
    return {
        type: types.HANDLE_MISSINGMANAGERCOMMENTSAPPLICATION,
        data: {missingManagerCommentsApplication: missingManagerCommentsApplication }
    }
}
