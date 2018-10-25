import { combineReducers } from 'redux';
import active from './active/activeRootReducer';
import inactive from './inactive/recentlyInactiveRootReducer';
import other from './other/newEmployeeRootReducer';
import filter from './filterReducer';

export default combineReducers({
    active,
    filter,
    inactive,
    other
})
 