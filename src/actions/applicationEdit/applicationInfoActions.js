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


 


export function getApplication(staffId) {
    return async function (dispatch) { 
        dispatch(beginAjaxCall())

        try {
        
        //   const staff = await RestClient.Get(`position/${mplID}`)
        debugger;
            const application = await RestClient.Get(`application/work/${staffId}`)
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


