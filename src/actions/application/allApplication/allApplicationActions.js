import { ActionTypes as types } from '../../../constants/application/allApplication/allApplicationConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getAllApplicationSuccess(allApplication) {
    return { 
        type: types.GET_ALLAPPLICATION_SUCCESS,
        data: { allApplication: allApplication }
    }
}

export function getAllApplication(sourcemarket = 'ALL', jobfamily = 'ALL',  jobtitle = 'ALL', jump = 'ALL',criteria = null) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
        debugger;
        try {
        
            // const allRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)
            const allApplication = await RestClient.Get(`application/AllApplicationData/${sourcemarket}/${jobfamily}/${jobtitle}/${jump}/${criteria !== null ? `${criteria}` : ''}`)

                
                debugger;
            dispatch(getAllApplicationSuccess(allApplication))
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

export function handleAllApplication(allApplication) {
    return {
        type: types.HANDLE_ALLAPPLICATION,
        data: { allApplication: allApplication }
    }
}
