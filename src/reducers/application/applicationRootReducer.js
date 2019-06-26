import { combineReducers } from 'redux';
import allApplication from './allApplication/allApplicationReducer';
import missingApplication from './missingApplication/missingApplicationReducer';
import missingManagerCommentsApplication from './missingManagerComments/missingManagerCommentsApplicationReducer';
import planToResignApplication from './planToResignApplication/planToResignApplicationReducer';
import filter from './filterReducer';

export default combineReducers({
    allApplication,
    missingManagerCommentsApplication,
    missingApplication,
    planToResignApplication,
    filter
})
 