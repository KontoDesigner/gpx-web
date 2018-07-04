import { ActionTypes as types } from '../../constants/staffEdit/employeeInfoConstants'
import { beginAjaxCall, ajaxCallError } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'

export function getAvailablePositionsSuccess(availablePositions) {
    return {
        type: types.GET_AVAILABLEPOSITIONS_SUCCESS,
        data: { availablePositions: availablePositions }
    }
}

export function getAvailablePositions(currentSeason, nextSeason, followingSeason) {
    return async function (dispatch) {
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
    return async function (dispatch) {
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
    return async function (dispatch) {
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