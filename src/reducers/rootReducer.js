import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import footer from './footerReducer';
import { reducer as toastrReducer } from 'react-redux-toastr'
import staff from './staff/staffRootReducer'
import staffEdit from './staffEdit/staffEditRootReducer'
import geography from './geographyReducer'
import setting from './settingReducer'
import planning from './planning/planningRootReducer'

export default combineReducers({
    ajaxCallsInProgress,
    footer,
    toastr: toastrReducer,
    staff,
    staffEdit,
    geography,
    planning,
    setting
})
