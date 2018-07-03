import { ActionTypes as types } from '../constants/geographyConstants'

var defaultState = {
    sourceMarkets: [],
    currentSeason: [],
    nextSeason: [],
    followingSeason: []
}

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_SOURCEMARKETS_SUCCESS:
            return {
                ...state,
                sourceMarkets: action.data.sourceMarkets
            }
        case types.GET_SEASONS_SUCCESS:
            return {
                ...state,
                currentSeason: action.data.seasons[0],
                nextSeason: action.data.seasons[1],
                followingSeason: action.data.seasons[2]
            }
        default:
            return state
    }
}
