import { ActionTypes as types } from '../../constants/setting/settingConstants'

import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'


export function removeTemplate(model) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            debugger;
           // const res = await RestClient.Post(`staff/removestaff/${model.StaffID}`)
            const res= await RestClient.Post('mail/removetemplate', model.TemplateName)
            //const res = await RestClient.Post('abscense/abscenseuser', model)
      
            dispatch(endAjaxCall())

            if (res) {
                toastr.success('Success', `Selected template was Removed`)
            } else {
                toastr.error('Error', `Selected template was not Removed: ${res ? res.message : 'Error'}`)
            }
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        } 
    } 
}

export function handleSettingField2(field, val) {
    debugger;
    return {
        type: types.HANDLE_SETTING_FIELD2,
        data: { field: field, val: val }
    }
}

export function handleSettingField(field, val) {
    return {
        type: types.HANDLE_SETTING_FIELD,
        data: { field: field, val: val }
    }
}

export function handleSelectedSetting(selectedSetting) {
    return {
      type: types.HANDLE_SELECTEDSETTING,
      data: { selectedSetting: selectedSetting }
    }
  }
  



  export function getAllJobTitleSuccess(jobTitle) {
    return {
      type: types.GET_ALLJOBTITLE_SUCCESS,
      data: { jobTitle: jobTitle }
    }
  }


  
//   export function getJobFamily() {
//     return async function (dispatch) {
//       dispatch(beginAjaxCall())
  
//       try {
//         const jobFamily = await RestClient.Get(`setting/jobfamily`)
  
       
//         dispatch(getJobFamilySuccess(jobFamily))
//       } catch (error) {
//         dispatch(ajaxCallError(error))
  
//         throw error
//       }
//     }
//   }

  export function getAllJobTitle() {
    return async function (dispatch) {
      dispatch(beginAjaxCall())
  
      try {
        const jobTitle = await RestClient.Get(`setting/jobtitle`)
  
       
        dispatch(getAllJobTitleSuccess(jobTitle))
      } catch (error) {
        dispatch(ajaxCallError(error))
  
        throw error
      }
    }
  }

export function handleApplyOpen(val) {
  
    return {
   
       type: types.HANDLE_APPLYOPEN,
        data: { val: val }  
    }
}


export function handleSetting(setting) {
    return {
      type: types.HANDLE_SETTING,
      data: { setting: setting }
    }
  }


export function getSettingSuccess(setting) {
    return {
        type: types.GET_SETTING_SUCCESS,
        data: { setting: setting }
    }
}

export function getSetting() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
           
            const setting = await RestClient.Get(`setting/setting`)

 

            if (setting) {
                setting.jobFamiliesWork= setting.jobFamiliesWork && setting.jobFamiliesWork !== '' ? setting.jobFamiliesWork.split(',') : []
            }

           
            setting.jobFamiliesWork= setting.jobFamiliesWork ? setting.jobFamiliesWork.map(k => ({
                     id: k,
                     name: k
                })):[]


        
            dispatch(getSettingSuccess(setting))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}




export function getJobFamiliesSuccess(jobFamilies) {
    return {
        type: types.GET_JOBFAMILIES_SUCCESS,
        data: { jobFamilies: jobFamilies }
    }
}


export function getJobFamilies() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const jobFamilies = await RestClient.Get(`setting/jobfamily`)

            dispatch(getJobFamiliesSuccess(jobFamilies))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}