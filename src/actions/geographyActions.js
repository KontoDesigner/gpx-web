import { ActionTypes as types } from '../constants/geographyConstants';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions'
import RestClient from '../infrastructure/restClient'

export function getSeasonsSuccess(seasons) {
    return {
        type: types.GET_SEASONS_SUCCESS,
        data: { seasons: seasons }
    }
}

export function getSeasons() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const seasonstmp = await RestClient.Get(`geography/seasons`);


            const seasons = seasonstmp.filter(function (el) {
                return el.id != null;
              });


            dispatch(getSeasonsSuccess(seasons))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function getSourceMarketsSuccess(sourceMarkets) {
    return {
        type: types.GET_SOURCEMARKETS_SUCCESS,
        data: { sourceMarkets: sourceMarkets }
    }
}

 

export function getSourceMarkets() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const sourceMarkets = await RestClient.Get(`geography/sourcemarket`)

            dispatch(getSourceMarketsSuccess(sourceMarkets))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}

