import { ActionTypes as types } from '../../constants/setting/keywordsConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'


export function handleKeywords(keywords) {
    return {
      type: types.HANDLE_KEYWORDS,
      data: { keywords: keywords }
    }
  }

  export function getKeywordsSuccess(keywords) {
    return {
        type: types.GET_KEYWORDS_SUCCESS,
        data: { keywords: keywords }
    }
}

// export function handleKeywords(field, val) {
//     debugger;
//     return {
    
//         type: types.HANDLE_KEYWORDS,
//         data: { field: field, val: val }
//     }
// }


export function handleKeywordsField(field, val) {
    return {
        type: types.HANDLE_KEYWORDS_FIELD,
        data: { field: field, val: val }
    }
}
export function getKeywords() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())
 
        try {
           
            const keywords = await RestClient.Get(`setting/keywords`)
debugger;

        
            dispatch(getKeywordsSuccess(keywords))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}



