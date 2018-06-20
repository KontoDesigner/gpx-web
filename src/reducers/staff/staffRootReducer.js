import { combineReducers } from 'redux';
import active from './active/activeRootReducer';
import filter from './filterReducer';

export default combineReducers({
    active,
    filter
})
