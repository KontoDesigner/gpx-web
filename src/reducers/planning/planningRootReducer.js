import { combineReducers } from 'redux';
import planning from './planning/planningRootReducer';
import filter from './filterReducer';
export default combineReducers({
    planning,
    filter
})
 