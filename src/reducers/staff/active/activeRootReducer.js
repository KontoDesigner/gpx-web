import { combineReducers } from 'redux'
import headOf from './headOfReducer'
import destination from './destinationReducer'
import jobTitle from './jobTitleReducer'
import name from './nameReducer'

export default combineReducers({
  headOf,
  destination,
  name,
  jobTitle
})
