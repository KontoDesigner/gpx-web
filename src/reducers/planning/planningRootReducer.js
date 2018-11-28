import { combineReducers } from 'redux';
import planning from './planning/planningRootReducer';
import filter from './filterReducer';
import candidate from './planningReducer'
export default combineReducers({
    planning,
   candidate,
    filter
})
 