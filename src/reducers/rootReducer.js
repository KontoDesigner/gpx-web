import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import footer from './footerReducer';
import { reducer as toastrReducer } from 'react-redux-toastr'
import staff from './staff/staffRootReducer'

export default combineReducers({
    ajaxCallsInProgress,
    footer,
    toastr: toastrReducer,
    staff
})
