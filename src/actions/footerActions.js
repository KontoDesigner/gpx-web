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
            const version = await RestClient.Get('getversion');

            dispatch(getVersionSuccess(version));
        } catch (error) {
            dispatch(ajaxCallError(error));

            throw (error);
        }
    };
}

export function getSupportEmailSuccess(supportEmail) {
    return {
        type: types.GET_SUPPORT_EMAIL_SUCCESS,
        data: { supportEmail: supportEmail }
    };
}

export function getSupportEmail() {
    return async function (dispatch) {
        dispatch(beginAjaxCall());

        try {
            const supportEmail = await RestClient.Get('getsupportemail');

            dispatch(getSupportEmailSuccess(supportEmail));
        } catch (error) {
            dispatch(ajaxCallError(error));

            throw (error);
        }
    };
}
