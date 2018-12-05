import { combineReducers } from 'redux'
import newEmployee from './newEmployeeReducer'
import fileImport from './fileImportReducer'

export default combineReducers({
  newEmployee,
  fileImport
 
})
 