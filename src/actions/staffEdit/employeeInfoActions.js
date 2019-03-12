import { ActionTypes as types } from '../../constants/staffEdit/employeeInfoConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'
import moment from 'moment'
export function save(model) {deletePositionAssign
    var currentdate = new Date()

    var newdatemodified = moment(currentdate).format('YYYY-MM-DD HH:mm:ss')

    let cleanModel = {}

    //  ProfilingSelect : model.

    // International: model.international ? model.international.map(x => {
    //     return {model.international:x.international} }

    //     ):[],

    //  cleanModel.International=model.international  ? model.international:null
    //  cleanModel.NationalConcept = model.nationalConcept  ? model.nationalConcept:null
    //  cleanModel.Suitable=model.suitable  ? model.suitable:null

    cleanModel.Suitable = model.suitable ? model.suitable.join() : null
    cleanModel.International = model.international ? model.international.join() : null
    cleanModel.NationalConcept = model.nationalConcept ? model.nationalConcept.join() : null

    cleanModel.DateModified = newdatemodified

    cleanModel.StaffID = model.staffID
    cleanModel.FirstName = model.firstName
    cleanModel.LastName = model.lastName
    cleanModel.LastName2 = model.lastName2
    cleanModel.CostCenter = model.costCenter
    cleanModel.SpainRegistred = model.spainRegistred
    cleanModel.SapID = model.sapID
    cleanModel.MopedID = model.mopedID
    cleanModel.CentralID = model.centralID

    cleanModel.Email = model.email
    cleanModel.EmailWork = model.emailWork

    cleanModel.Education = model.education
    cleanModel.Title = model.title
    cleanModel.EmpContent = model.empContent
    cleanModel.Phone = model.phoneHome

    cleanModel.PhoneDestination = model.phoneDestination

    cleanModel.Nationality = model.nationality
    cleanModel.SourceMarket = model.sourceMarket
    cleanModel.PositionType = model.positionType
    cleanModel.DateJoined = model.dateJoined
    cleanModel.CostCenter = model.costCenter
    cleanModel.Driver = model.driver
    cleanModel.DateOfBirth = model.dateOfBirth
    cleanModel.DrivingYear = model.drivingYear
    cleanModel.Status = model.status
    //SubStatus : model.

    cleanModel.ChildCareRemarks = model.childCareRemarks

    cleanModel.Languages = model.languages

    cleanModel.Address = model.address
    cleanModel.AdCountry = model.adCountry
    cleanModel.AdZip = model.adZip

    cleanModel.AdCity = model.adCity

    cleanModel.Nat = model.nat
    cleanModel.Nat2 = model.nat2
    cleanModel.PhoneHome = model.phoneHome
    cleanModel.ChildCare = model.childCare ? model.childCare : null
    cleanModel.IsManager = model.isManager
    cleanModel.PaF = model.paF
    cleanModel.PafFromDate = model.pafFromDate
    cleanModel.PafEndDate = model.pafEndDate
    cleanModel.SportFitness = model.sportFitness
    cleanModel.SportFitnessRemarks = model.sportFitnessRemarks

    cleanModel.Arabic = model.arabic ? model.arabic : null
    cleanModel.Danish = model.danish ? model.danish : null
    cleanModel.Dutch = model.dutch ? model.dutch : null

    cleanModel.English = model.english ? model.english : null
    cleanModel.Finnish = model.finnish ? model.finnish : null
    cleanModel.French = model.french ? model.french : null
    cleanModel.German = model.german ? model.german : null
    cleanModel.Greek = model.greek ? model.greek : null
    cleanModel.Norwegian = model.norwegian ? model.norwegian : null
    cleanModel.Italian = model.italian ? model.italian : null
    cleanModel.Polish = model.polish ? model.polish : null
    cleanModel.Portuguese = model.portuguese ? model.portuguese : null
    cleanModel.Russian = model.russian ? model.russian : null
    cleanModel.Spanish = model.spanish ? model.spanish : null
    cleanModel.Turkish = model.turkish ? model.turkish : null
    cleanModel.Swedish = model.swedish ? model.swedish : null

    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const res = await RestClient.Post(`staff/updatestaff`, cleanModel)

            dispatch(endAjaxCall())

            if (res) {
                toastr.success('Success', `Staff was saved`)
            } else {
                toastr.error('Error', `Could not save staff: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function sendToCtx(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
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

export function deletePositionAssign(id, startDate, staffId) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        var currentdate = new Date()

        var newdatemodified = moment(currentdate).format('YYYY-MM-DD HH:mm:ss')
        debugger
        try {
            const model = {
                Id: id,
                StartDate: startDate,
                StaffID: staffId,
                DateModified: newdatemodified
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

export function updatePositionAssign(positionAssign) {
    return async function(dispatch) {
        dispatch(beginAjaxCall()) 

        try {
            const res = await RestClient.Post('positionassign/updatepositionassign', positionAssign)
            debugger;
            dispatch(endAjaxCall())

            if (res && res.ok) {
                toastr.success('Success', ` ${res ? res.message : 'Success'}`)
            } else {
                toastr.error('Position is occupied', ` ${res ? res.message : 'Position is occupied'}`)
            }
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
            const res = await RestClient.Post('positionassign', positionAssign)

            dispatch(endAjaxCall())

            if (res && res.ok) {
                toastr.success('Success', ` ${res ? res.message : 'Success'}`)
            } else {
                toastr.error('Position is occupied', ` ${res ? res.message : 'Position is occupied'}`)
            }
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
            debugger
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
            let staff = await RestClient.Get(`staff/${staffId}`)

            if (staff) {
                staff.suitable = staff.suitable && staff.suitable !== '' ? staff.suitable.split(',') : []
                staff.international = staff.international && staff.international !== '' ? staff.international.split(',') : []
                staff.nationalConcept = staff.nationalConcept && staff.nationalConcept !== '' ? staff.nationalConcept.split(',') : []
            }

            dispatch(getStaffSuccess(staff))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
