
import { ActionTypes as types } from '../../constants/setting/filterConstants'

export function handleText(text) {
  return {
    type: types.HANDLE_TEXT,
    data: { text: text }
  }
}

export function handleSelectedKeywords(selectedKeywords) {
  
  return {
    type: types.HANDLE_SELECTEDKEYWORDS,
    data: { selectedKeywords: selectedKeywords }
  }
}

export function handleSelectedNotification(selectedNotification) {
  
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

