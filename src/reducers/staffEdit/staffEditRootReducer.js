import { combineReducers } from 'redux';
import employeeInfo from './employeeInfoReducer';
import abscense from './abscenseReducer';
export default combineReducers({
    employeeInfo,abscense
})
