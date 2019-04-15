import { combineReducers } from 'redux'
import employeeInfo from './employeeInfoReducer'
import abscense from './abscenseReducer'
import destinationHistory from './destinationHistoryReducer'
import applicationHistory from './applicationHistoryReducer'
import abscenseHistory from './abscenseHistoryReducer'
import history from './historyReducer'
import confirmedDate from './confirmedDatesReducer'
import cv from './cvReducer'
import flightRequestHistory from './flightRequestHistoryReducer'

export default combineReducers({
    employeeInfo,
    abscense,
    destinationHistory,
    applicationHistory,
    cv,
    abscenseHistory,
    history,
    confirmedDate,
    flightRequestHistory
})
