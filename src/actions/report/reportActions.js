import { ActionTypes as types } from '../../constants/report/reportConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'

export function handleYearField(val) {

    return {
       type: types.HANDLE_YEAR_FIELD,
        data: { val: val }
    }
}

export function handleDestinationField(val) {
 debugger;
    return {
        
       type: types.HANDLE_DESTINATION_FIELD,
        data: { val: val }


      
    }
}

export function handleResignDates(val) {

    return {
      
        type: types.HANDLE_RESIGNDATES,
        data: {val: val}
      
    }

}

export function getResignDatesLookupSuccess(resigndates) {
    return {
        type: types.GET_RESIGNDATESLOOKUP_SUCCESS,
        data: { resigndates: resigndates }
    }
}



export function getResignDatesLookup() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())
     
        try { 
            
            const resigndates = await RestClient.Get(`resign/GetAllResignDatesLookup`)
       debugger;
       //dispatch(handleResignDates)
            dispatch(getResignDatesLookupSuccess(resigndates))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}

export function getResignDatesSuccess(resigndates) {
    return {
        type: types.GET_RESIGNDATES_SUCCESS,
        data: { resigndates: resigndates }
    }
}



export function getResignDates() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())
     
        try { 
            
            const resigndates = await RestClient.Get(`resign/GetAllResignDates`)
       debugger;
       //dispatch(handleResignDates)
            dispatch(getResignDatesSuccess(resigndates))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}
export function createResignReport(model) {
    return async function(dispatch) {
      //  dispatch(beginAjaxCall())
debugger;
        try {

            var currentdate = new Date()
            var newdatemodified =
              currentdate.getFullYear() +
              '-' +
              (currentdate.getMonth() + 1) +
              '-' +
              currentdate.getDate()

            //   const req = {
            //       resignDate: appDate.appDate,
            //       destination: ['ACE']
            //   }
  debugger;
             //await RestClient.Download(`resign/GetResignReports?datetime=2018-10-02`,null,'ResignReport.xlsx')
              await RestClient.Download(`report/GetResignReports`,model, 'ResignReport_'+newdatemodified+'.xlsx')
          
            //const replyYesNoRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

            //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
           // dispatch(handleCreateReport([]))

           dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function createOnboardReport(model) {
    return async function(dispatch) {
      //  dispatch(beginAjaxCall())
debugger;
        try {

            var currentdate = new Date()
            var newdatemodified =
              currentdate.getFullYear() +
              '-' +
              (currentdate.getMonth() + 1) +
              '-' +
              currentdate.getDate()

            //   const req = {
            //       resignDate: appDate.appDate,
            //       destination: ['ACE']
            //   }
  debugger;
             //await RestClient.Download(`resign/GetResignReports?datetime=2018-10-02`,null,'ResignReport.xlsx')
              await RestClient.Download(`report/GetOnboardReports`,model, 'OnboardReport_'+newdatemodified+'.xlsx')
          
            //const replyYesNoRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

            //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
           // dispatch(handleCreateReport([]))

           dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}


export function createVacantReport(model) {
    return async function(dispatch) {
      //  dispatch(beginAjaxCall())
debugger;
        try {

            var currentdate = new Date()
            var newdatemodified =
              currentdate.getFullYear() +
              '-' +
              (currentdate.getMonth() + 1) +
              '-' +
              currentdate.getDate()

            //   const req = {
            //       resignDate: appDate.appDate,
            //       destination: ['ACE']
            //   }
  debugger;
             //await RestClient.Download(`resign/GetResignReports?datetime=2018-10-02`,null,'ResignReport.xlsx')
              await RestClient.Download(`report/GetVacantReports`,model, 'VacantReport_'+newdatemodified+'.xlsx')
          
            //const replyYesNoRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

            //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
           // dispatch(handleCreateReport([]))

           dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function createVacantReportSuccess(report) {
    return {
        type: types.CREATE_VACANTREPORT_SUCCESS,
        data: { createVacantReport: createVacantReport }
    }
}

export function createReport(model) {
    return async function(dispatch) {
       // dispatch(beginAjaxCall())

        try {

            var currentdate = new Date()
            var newdatemodified =
              currentdate.getFullYear() +
              '-' +
              (currentdate.getMonth() + 1) +
              '-' +
              currentdate.getDate()
debugger;
             //await RestClient.Download(`resign/GetResignReports?datetime=2018-10-02`,null,'ResignReport.xlsx')
             await RestClient.Download(`report/GetReports`,model,'PlanningReport_'+newdatemodified+'.xlsx')
            
            //const replyYesNoRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

            //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
           // dispatch(handleCreateReport([]))

           dispatch(endAjaxCall())
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function createReportSuccess(report) {
    return {
        type: types.CREATE_REPORT_SUCCESS,
        data: { createReport: createReport }
    }
}

export function getReportSuccess(report) {
    return {
        type: types.GET_REPORT_SUCCESS,
        data: { report: report }
    }
}

export function getReport() {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            const report = await RestClient.Get(`Report/GetAllDestSingle`)
            
            //const replyYesNoRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

            //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
            dispatch(handleReport)

            dispatch(getReportSuccess(report))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function handleCreateReport(createReport) {
    return {
        type: types.HANDLE_CREATEREPORT,
        data: { createReport: createReport}
    }
}

export function handleReport(report) {
    return {
        type: types.HANDLE_REPORT,
        data: { report: report}
    }
}
