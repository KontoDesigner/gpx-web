import { ActionTypes as types } from '../../constants/report/reportConstants';

var defaultState = {
    // currentAvailablePositions: [],
    // nextAvailablePositions: [],
    // followingAvailablePositions: [],
    // currentPositionAssign: null,
    // nextPositionAssign: null,
   selectedDestination: ["All Destinations"], 
   selectedPositionType: null, 
//    resigndates:null, 
   selectedYear: null,
    report: [],
    createreport: null,
    selectedResignDates: null, 
    change:{}
} 

export default function reportReducer(state = defaultState, action) {
    switch (action.type) {
        case (types.HANDLE_DESTINATION_FIELD):
        return {
            ...state,
            selectedDestination:action.data.val

        }
        case (types.HANDLE_CHANGE_FIELD):
        return {
            ...state,
            change: {
                ...state.change,
                [action.data.field]: action.data.val 
            },
        }
        case (types.HANDLE_RESIGNDATES):
        return {
            ...state,
            selectedResignDates:action.data.val

        }

        case (types.HANDLE_YEAR_FIELD):
        return {
            ...state,
            selectedYear:action.data.val
        }
        case types.GET_REPORT_SUCCESS:
            return {
                ...state,
                report: action.data.report
            }

            case types.GET_RESIGNDATESLOOKUP_SUCCESS:
            return {
                ...state,
                resigndates: action.data.resigndates
            }
            
            case types.GET_RESIGNDATES_SUCCESS:
            return {
                ...state,
                resigndates: action.data.resigndates
            }
            // case types.CREATEREPORT_SUCCESS:
            // return {
            //     ...state,
            //     createreport: action.data.createreport
            // }
            // case (types.HANDLE_CREATEREPORT):
            // return {
            //     ...state,
            //     handleCreateReport:action.data.handleCreateReport
    
            // }
            case types.HANDLE_SELECTEDYEAR:
            return    {
  ...state,
  selectedYear: action.data.selectedYear
            }
//             case types.HANDLE_SELECTEDDESTINATION:
//             return    {
//   ...state,
//   selectedDestination: action.data.selectedDestination
//             }
        default:
            return state;
    }
}


