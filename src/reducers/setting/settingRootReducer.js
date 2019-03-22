import { combineReducers } from 'redux';
import setting from './settingReducer';
import filter from './filterReducer';
import keywords from './keywordsReducer';
import keywordsEdit from './keywordsEditReducer';
export default combineReducers({
    setting,filter,keywords,keywordsEdit
})
