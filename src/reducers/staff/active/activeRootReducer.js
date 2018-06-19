import { combineReducers } from 'redux'
import headOf from './headOfReducer'
import destination from './destinationReducer'
import jobTitle from './jobTitleReducer'

export default combineReducers({
  headOf,
  destination,
  jobTitle
})
