import { combineReducers } from 'redux';
import active from './active/activeRootReducer';
import filter from './filterReducer';
import tabs from './tabReducer';

export default combineReducers({
    active,
    filter,
    tabs
})
