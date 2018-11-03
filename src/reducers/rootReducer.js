import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import footer from './footerReducer';
import { reducer as toastrReducer } from 'react-redux-toastr'
import staff from './staff/staffRootReducer'
import staffEdit from './staffEdit/staffEditRootReducer'
import geography from './geographyReducer'
import setting from './setting/settingRootReducer'
import notification from './notification/notificationRootReducer'
import planning from './planning/planningRootReducer'
import planningEdit from './planningEdit/planningEditRootReducer'
import report from './report/reportRootReducer'

export default combineReducers({
    ajaxCallsInProgress,
    footer,
    toastr: toastrReducer,
    staff,
    staffEdit,
    geography,
    planning,
    planningEdit,
    setting,
    notification,
    report
})
