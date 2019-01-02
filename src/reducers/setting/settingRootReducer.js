import { combineReducers } from 'redux';
import setting from './settingReducer';
import filter from './filterReducer';

export default combineReducers({
    setting,filter
})
