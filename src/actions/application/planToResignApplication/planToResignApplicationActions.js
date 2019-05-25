import { ActionTypes as types } from '../../../constants/application/planToResignApplication/planToResignApplicationConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getPlanToResignApplicationSuccess(planToResignApplication) {
    return { 
        type: types.GET_PLANTORESIGNAPPLICATION_SUCCESS,
        data: { planToResignApplication: planToResignApplication }
    }
}

export function getPlanToResignApplication(sourcemarket = 'ALL', jobfamily = 'ALL',  jobtitle = 'ALL', jump = 'ALL',criteria = null) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
        debugger;
        try {
        
            // const allRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)
            const planToResignApplication = await RestClient.Get(`application/planToResignApplicationData/${sourcemarket}/${jobfamily}/${jobtitle}/${jump}/${criteria !== null ? `${criteria}` : ''}`)
            debugger;

                
                debugger;
            dispatch(getPlanToResignApplicationSuccess(planToResignApplication))
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

export function handlePlanToResignApplication(planToResignApplication) {
    return {
        type: types.HANDLE_PLANTORESIGNAPPLICATION,
        data: { planToResignApplication: planToResignApplication }
    }
}
