
import { ActionTypes as types } from '../../constants/setting/filterConstants'

export function handleText(text) {
  return {
    type: types.HANDLE_TEXT,
    data: { text: text }
  }
}



export function handleSelectedNotification(selectedNotification) {
  debugger;
  return {
    type: types.HANDLE_SELECTEDNOTIFICATION,
    data: { selectedNotification: selectedNotification }
  }
}

export function handleFilter(filter) {
  return {
    type: types.HANDLE_FILTER,
    data: { filter: filter }
  }
}

export function handleSelectedSetting(selectedSetting) {
  return {
    type: types.HANDLE_SELECTEDSETTING,
    data: { selectedSetting: selectedSetting }
  }
}

