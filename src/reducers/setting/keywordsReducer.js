import { ActionTypes as types } from '../../constants/setting/keywordsConstants';

var defaultState = {
  
    keywords:{},
 
    
}

export default function keywordsReducer(state = defaultState, action) {
    switch (action.type) {
   

        case types.HANDLE_KEYWORDS:
        return action.data.keywords;


          

            case types.GET_KEYWORDS_SUCCESS:
            return {
                ...state,
                keywords: action.data.keywords
            }
     
        default:
            return state
    }
}
