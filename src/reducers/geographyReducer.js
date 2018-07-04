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
                currentSeason: action.data.seasons.currentSeason,
                nextSeason: action.data.seasons.nextSeason,
                followingSeason: action.data.seasons.followingSeason
            }
        default:
            return state
    }
}
