import { ActionTypes as types } from '../../constants/setting/keywordsConstants';

var defaultState = {
  
    keywords:[]
 
    
}

export default function keywordsReducer(state = defaultState, action) {
    switch (action.type) {
   

        case types.HANDLE_KEYWORDS:
        return action.data.keywords;


        case (types.HANDLE_KEYWORDS_FIELD):
        return {
            ...state,
            keywords: {
                ...state.setting,
                [action.data.field]: action.data.val 
            },
        }
        case types.GET_KEYWORDSLOOKUP_SUCCESS:
        return {
            ...state,
            keywordslookup: action.data.keywordslookup
        }
            case types.GET_KEYWORDS_SUCCESS:
            return {
                ...state,
                keywords: action.data.keywords
            }
     
        default:
            return state
    }
}
