import { ActionTypes as types } from '../../constants/staff/filterConstants';

export function handleText(text) {
    return {
        type: types.HANDLE_TEXT,
        data: { text: text }
    }
}

export function handleFilter(filter) {
    return {
        type: types.HANDLE_FILTER,
        data: { filter: filter }
    }
}