import { ActionTypes as types } from '../../constants/setting/settingWorkConstants'

import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'


export function handleSettingField2(field, val) {
    debugger;
    return {
        type: types.HANDLE_SETTING_FIELD2,
        data: { field: field, val: val }
    }
}
    
