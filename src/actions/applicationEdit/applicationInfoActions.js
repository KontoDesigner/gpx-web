import { ActionTypes as types } from '../../constants/applicationEdit/applicationInfoConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'
import moment from 'moment'
export function save(model) {
    var currentdate = new Date()
debugger;
    var newdatemodified = moment(currentdate).format('YYYY-MM-DD HH:mm:ss')

    let cleanModel = {}

    cleanModel.DateModified = newdatemodified
    cleanModel.StaffID = model.staffID
    cleanModel.Status = model.status
    cleanModel.FirstDest = model.firstDest
    cleanModel.SecondDest = model.secondDest
    cleanModel.ThirdDest = model.thirdDest
    cleanModel.FourthDest = model.fourthDest
    cleanModel.FirstJobTitle = model.firstJobTitle
    cleanModel.SecondJobTitle = model.secondJobTitle
    cleanModel.ThirdJobTitle = model.thirdJobTitle
    cleanModel.FourthJobTitle = model.fourthJobTitle

debugger;

    cleanModel.CouplePosition = model.couplePosition
    cleanModel.ChangePosition = model.changePosition
    cleanModel.CoupleName = model.coupleName
    cleanModel.CoupleSourceMarket = model.coupleSourceMarket
    cleanModel.Signature =model.signature
    cleanModel.PlaceDate = model.placeDate
    cleanModel.MostImportant = model.mostImportant
    cleanModel.NonDestinationPosition = model.nonDestinationPosition
    cleanModel.CoupleName = model.coupleName
    cleanModel.SkiPlacement = model.skiPlacement
    cleanModel.Fairs = model.fairs
    cleanModel.Comments = model.comments
    cleanModel.Season =model.season

    cleanModel.RemarksChoice1=model.remarksChoice1
    cleanModel.RemarksChoice2=model.remarksChoice2
    cleanModel.RemarksChoice3=model.remarksChoice3
    cleanModel.RemarksChoice4=model.remarksChoice4


    cleanModel.PlanToResign=model.planToResign
    cleanModel.Jump=model.jump
    cleanModel.ChangeJobFamily= model.changeJobFamily
    cleanModel.SupportChange= model.supportChange
    cleanModel.TopStrengths= model.topStrengths
    cleanModel.DevelopmentAreas= model.developmentAreas
    cleanModel.MidYearReview= model.midYearReview
    cleanModel.MidYearRating= model.midYearRating
    cleanModel.OverallRating= model.overallRating
    cleanModel.LongService= model.longService
   cleanModel.Disciplinary=model.disciplinary
   cleanModel.SupportRequest= model.supportRequest
   cleanModel.SupportRequestComment= model.supportRequestComment
   cleanModel.ChangesRequest=model.changesRequest
   cleanModel.FeedBackRequest=model.feedBackRequest
   cleanModel.PlaceDateMgr= model.placeDateMgr
   cleanModel.SignatureMgr= model.signatureMgr

 
    //  ProfilingSelect : model.

    // International: model.international ? model.international.map(x => {
    //     return {model.international:x.international} }

    //     ):[],

    //  cleanModel.International=model.international  ? model.international:null
    //  cleanModel.NationalConcept = model.nationalConcept  ? model.nationalConcept:null
    //  cleanModel.Suitable=model.suitable  ? model.suitable:null

    cleanModel.PreferToWork = model.preferToWork ? model.preferToWork.join() : null

debugger;


    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const res = await RestClient.Post(`application/updateapplication`, cleanModel)

            dispatch(endAjaxCall())

            if (res) {
               
                toastr.success('Success', `Application was saved`)
            } else {
                toastr.error('Error', `Could not save application: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function handleApplicationField(field, val) {
    debugger;
    return {
        type: types.HANDLE_APPLICATION_FIELD, 
        data: { field: field, val: val }
    }
}

export function handleFilterFromSuccess(from) {
    return {
        type: types.HANDLE_FILTER_FROM,
        data: { from: from }
    }
}



export function getApplicationSuccess(application) {
    return {
        type: types.GET_APPLICATION_SUCCESS,
        data: { application:application }
    }
}


 


export function getApplication(staffId,season) {
    return async function (dispatch) { 
        dispatch(beginAjaxCall())

        try {
        
        //   const staff = await RestClient.Get(`position/${mplID}`)
        debugger;
            const application = await RestClient.Get(`application/work/${staffId}/${season}`)
           debugger;
          

            if (application) {
                application.preferToWork= application.preferToWork && application.preferToWork !== '' ? application.preferToWork.split(',') : []
            }

           
             application.preferToWork= application.preferToWork ? application.preferToWork.map(k => ({
                     id: k,
                     name: k
                })):[]
          
          


            dispatch(endAjaxCall())

            dispatch(getApplicationSuccess(application))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}


