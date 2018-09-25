import { ActionTypes as types } from '../../constants/planning/planning/filterConstants'

export function handleText(text) {
  return {
    type: types.HANDLE_TEXT,
    data: { text: text }
  }
}

export function handleSourceMarket(sourceMarket) {
  return {
    type: types.HANDLE_SOURCEMARKET,
    data: { sourceMarket: sourceMarket }
  }
}

export function handleSelectedRole(selectedRole) {
  return {
    type: types.HANDLE_SELECTEDROLE,
    data: { selectedStaff: selectedRole }
  }
}

export function handleFilter(filter) {
  return {
    type: types.HANDLE_FILTER,
    data: { filter: filter }
  }
}