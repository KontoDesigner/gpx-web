import { ActionTypes as types } from '../../constants/setting/keywordsEditConstants';

var defaultState = {
    keywords: null,
    
     
     
}

export default function keywordsInfoReducer(state = defaultState, action) {

    switch (action.type) {
        
        case (types.HANDLE_INPUT_FIELD):
 
        return {
            ...state, 
            keywords: { 
                ...state.keywords,
                [action.data.field]: action.data.val
            },
        }
        case types.GET_KEYWORDS_SUCCESS: 
            return {
                ...state,
                keywords: action.data.keywords
            }
        default:
            return state;
    }
}
