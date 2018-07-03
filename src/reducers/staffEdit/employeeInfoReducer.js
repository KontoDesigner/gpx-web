import { ActionTypes as types } from '../../constants/staffEdit/employeeInfoConstants';

var defaultState = {
    availablePositions: [],
    positionAssigns: [],
    staff: null
}

export default function employeeInfoReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_AVAILABLEPOSITIONS_SUCCESS:
            return {
                ...state,
                availablePositions: action.data.availablePositions
            }
        case types.GET_POSITIONASSIGNS_SUCCESS:
            return {
                ...state,
                positionAssigns: action.data.positionAssigns
            }
        case types.GET_STAFF_SUCCESS:
            return {
                ...state,
                staff: action.data.staff
            }
        case types.GET_SEASONGEOGRAPHY_SUCCESS:
            return {
                ...state,
                seasonGeography: action.data.seasonGeography
            }
        default:
            return state;
    }
}