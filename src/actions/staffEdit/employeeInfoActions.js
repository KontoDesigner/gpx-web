import { ActionTypes as types } from '../../constants/staffEdit/employeeInfoConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'

export function sendToCtx(staff) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const model = {
                Id: staff.staffID,
                Name: staff.firstName + ' ' + staff.lastName,
                DateOfBirth: staff.dateOfBirth,
                SourceMarket: staff.sourceMarket,
                Phone: staff.phone
            }

            console.log('asdf', model)

            const res = await RestClient.Post('ctx/send', model)

            dispatch(endAjaxCall())

            if (res && res.ok) {
                toastr.success('Success', `Request sent to CTX`)
            } else {
                toastr.error('Error', `Could not send request to CTX: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function handleCurrentPositionAssignField(field, val) {
    return {
        type: types.HANDLE_CURRENTPOSITIONASSIGN_FIELD,
        data: { field: field, val: val }
    }
}

export function handleNextPositionAssignField(field, val) {
    return {
        type: types.HANDLE_NEXTPOSITIONASSIGN_FIELD,
        data: { field: field, val: val }
    }
}

export function handleFollowingPositionAssignField(field, val) {
    return {
        type: types.HANDLE_FOLLOWINGPOSITIONASSIGN_FIELD,
        data: { field: field, val: val }
    }
}

export function handleStaffField(field, val) {
    return {
        type: types.HANDLE_STAFF_FIELD,
        data: { field: field, val: val }
    }
}

export function handleFilterFromSuccess(from) {
    return {
        type: types.HANDLE_FILTER_FROM,
        data: { from: from }
    }
}

export function deletePositionAssign(id) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const model = {
                Id: id
            }

            await RestClient.Post('positionassign/deletepositionassign', model)

            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function movePositionAssign(oldPositionAssignId, newMPLID) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        const model = {
            oldPositionAssignId: oldPositionAssignId,
            newMPLID: newMPLID
        }

        try {
            await RestClient.Post('positionassign/movepositionassign', model)

            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function insertPositionAssign(positionAssign) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            await RestClient.Post('positionassign', positionAssign)

            dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getAvailablePositionsSuccess(availablePositions) {
    return {
        type: types.GET_AVAILABLEPOSITIONS_SUCCESS,
        data: { availablePositions: availablePositions }
    }
}

export function getAvailablePositions(currentSeason, nextSeason, followingSeason) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const data = {
                CurrentSeason: currentSeason,
                NextSeason: nextSeason,
                FollowingSeason: followingSeason
            }

            const availablePositions = await RestClient.Post('positionassign/getavailablepositions', data)

            dispatch(getAvailablePositionsSuccess(availablePositions))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getPositionAssignsSuccess(positionAssigns) {
    return {
        type: types.GET_POSITIONASSIGNS_SUCCESS,
        data: { positionAssigns: positionAssigns }
    }
}

export function getPositionAssigns(staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const positionAssigns = await RestClient.Get(`positionassign/assignment/${staffId}`)

            dispatch(getPositionAssignsSuccess(positionAssigns))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getStaffSuccess(staff) {
    return {
        type: types.GET_STAFF_SUCCESS,
        data: { staff: staff }
    }
}

export function getStaff(staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const staff = await RestClient.Get(`staff/${staffId}`)

            dispatch(getStaffSuccess(staff))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
