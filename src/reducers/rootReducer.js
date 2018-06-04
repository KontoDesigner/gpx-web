import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import footer from './footerReducer';
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
    ajaxCallsInProgress,
    footer,
    toastr: toastrReducer
})
