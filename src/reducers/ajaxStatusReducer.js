import { ActionTypes as types } from '../constants/ajaxStatusConstants';
import $ from 'jquery';

var defaultState = 0;

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = defaultState, action) {
    if (action.type === types.BEGIN_AJAX_CALL) {
        if (state === 0) {
            $(".loader").fadeIn("slow");
        }

        return state + 1;
    } else if (action.type === types.AJAX_CALL_ERROR ||
        actionTypeEndsInSuccess(action.type)) {
        const val = state - 1;

        if (val === 0) {
            $(".loader").fadeOut("slow");
        }

        return val;
    }

    return state;
}