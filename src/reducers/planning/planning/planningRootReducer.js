import { combineReducers } from 'redux'
import allRoles from './allRolesReducer'
import placedRoles from './placedRolesReducer'
import vacantRoles from './vacantRolesReducer'
import replyYesNoRoles from './replyYesNoReducer'
import newPosition from './newPositionReducer'

export default combineReducers({
  allRoles,
  placedRoles,
  vacantRoles,
  replyYesNoRoles,
  newPosition
})
  