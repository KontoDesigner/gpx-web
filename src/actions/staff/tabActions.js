import { ActionTypes as types } from '../../constants/staff/tabConstants'

export function handleTabs(tabs) {
    return {
        type: types.HANDLE_TABS,
        data: { tabs: tabs }
    }
}