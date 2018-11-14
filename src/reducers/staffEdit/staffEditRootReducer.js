import { combineReducers } from 'redux';
import employeeInfo from './employeeInfoReducer';
import abscense from './abscenseReducer';
import destinationHistory from './destinationHistoryReducer'
import applicationHistory from './applicationHistoryReducer'
import cv from './cvReducer'
export default combineReducers({
    employeeInfo, abscense, destinationHistory,applicationHistory,cv
})
