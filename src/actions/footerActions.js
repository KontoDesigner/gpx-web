import { ActionTypes as types } from '../constants/footerConstants';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import RestClient from '../infrastructure/restClient';

export function getVersionSuccess(version) {
    return {
        type: types.GET_VERSION_SUCCESS,
        data: { version: version }
    };
}

export function getVersion() {
    return async function (dispatch) {
        dispatch(beginAjaxCall());

        try {
            const version = await RestClient.Get('application/getversion');

            dispatch(getVersionSuccess(version));
        } catch (error) {
            dispatch(ajaxCallError(error));

            throw (error);
        }
    };
}

export function getSupportEmailSuccess(supportEmail) {
    return {
        type: types.GET_SUPPORTEMAIL_SUCCESS,
        data: { supportEmail: supportEmail }
    };
}

export function getSupportEmail() {
    return async function (dispatch) {
        dispatch(beginAjaxCall());

        try {
            const supportEmail = await RestClient.Get('application/getsupportemail');

            dispatch(getSupportEmailSuccess(supportEmail));
        } catch (error) {
            dispatch(ajaxCallError(error));

            throw (error);
        }
    };
}

export function getWikiUrlSuccess(wikiUrl) {
    return {
        type: types.GET_WIKIURL_SUCCESS,
        data: { wikiUrl: wikiUrl }
    };
}

export function getWikiUrl() {
    return async function (dispatch) {
        dispatch(beginAjaxCall());

        try {
            const wikiUrl = await RestClient.Get('application/getwikiurl');

            dispatch(getWikiUrlSuccess(wikiUrl));
        } catch (error) {
            dispatch(ajaxCallError(error));

            throw (error);
        }
    };
}