import { combineReducers } from 'redux';
import active from './active/activeRootReducer';
import inactive from './inactive/recentlyInactiveRootReducer';
import other from './other/newEmployeeRootReducer';
import filter from './filterReducer';
import staff from './staffReducer'
import fileImport from './other/fileImportReducer'
export default combineReducers({
    active,
    filter,
    inactive,
    other,
    staff,
    fileImport
})
 