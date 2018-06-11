import { combineReducers } from 'redux'
import headOf from './headOfReducer'
import destination from './destinationReducer'

export default combineReducers({
  headOf,
  destination
})
