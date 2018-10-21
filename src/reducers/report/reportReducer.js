import { ActionTypes as types } from '../../constants/report/reportConstants';

var defaultState = {
    // currentAvailablePositions: [],
    // nextAvailablePositions: [],
    // followingAvailablePositions: [],
    // currentPositionAssign: null,
    // nextPositionAssign: null,
   selectedDestination: null,
    report: [],
    createreport: null
} 

export default function reportReducer(state = defaultState, action) {
    switch (action.type) {
        case (types.HANDLE_DESTINATION_FIELD):
        return {
            ...state,
            selectedDestination:action.data.val

        }
        case types.GET_REPORT_SUCCESS:
            return {
                ...state,
                report: action.data.report
            }
            case types.CREATEREPORT_SUCCESS:
            return {
                ...state,
                createreport: action.data.createreport
            }
            case (types.HANDLE_CREATEREPORT):
            return {
                ...state,
                handleCreateReport:action.data.handleCreateReport
    
            }

            case types.HANDLE_SELECTEDDESTINATION:
            return    {
  ...state,
  selectedDestination: action.data.selectedDestination
            }
        default:
            return state;
    }
}


