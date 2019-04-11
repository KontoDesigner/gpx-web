import { ActionTypes as types } from '../../../constants/planning/planning/placedRolesConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getPlacedRolesSuccess(placedRoles) {
    return {
        type: types.GET_PLACEDROLES_SUCCESS,
        data: { placedRoles: placedRoles }
    }
}

export function getPlacedRoles(sourcemarket = 'ALL', jobfamily = 'ALL',positiontype = 'ALL', criteria = null) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())
debugger;
        try {
            const placedRoles = await RestClient.Get(
                `positionassign/GetAllAssignedPositions/${sourcemarket}/${jobfamily}/${positiontype}/${criteria !== null ? `${criteria}` : ''}`
            
                )

            dispatch(getPlacedRolesSuccess(placedRoles))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function handlePlacedRoles(placedRoles) {
    return {
        type: types.HANDLE_PLACEDROLES,
        data: { placedRoles: placedRoles }
    }
}
