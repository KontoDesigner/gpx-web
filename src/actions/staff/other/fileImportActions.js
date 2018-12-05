import { ActionTypes as types } from '../../../constants/staff/other/fileImportConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getFileImportSuccess(fileImport) {
  return {
      type: types.GET_FILEIMPORT_SUCCESS,
      data: { fileImport: fileImport }
  }
}

export function getFileImport() {
  return async function(dispatch) {
      dispatch(beginAjaxCall())

      try { 
          const fileImport = null;
          
          //const replyYesNoRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

          //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
         dispatch(handleFileImport)

          dispatch(getFileImportSuccess(fileImport))
      } catch (error) {
          dispatch(ajaxCallError(error))

          throw error
      }
  }
}

export function handleFileImport(fileImport) {
    return {
      type: types.HANDLE_FILEIMPORT,
      data: {fileImport: fileImport }
    }
  }