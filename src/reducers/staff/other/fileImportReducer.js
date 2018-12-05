import { ActionTypes as types } from '../../../constants/staff/other/fileImportConstants'

var defaultState = [];

export default function fileImportReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_FILEIMPORT_SUCCESS:
            return action.data.fileImport;
            case types.HANDLE_FILEIMPORT:
            return action.data.fileImport;
        default:
            return state;
    }
} 