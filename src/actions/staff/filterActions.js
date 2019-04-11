import { ActionTypes as types } from '../../constants/staff/filterConstants'

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

export function handleSelectedJobFamily(selectedJobFamily) {
 
  return {
    
    type: types.HANDLE_SELECTEDJOBFAMILY,
    data: { selectedJobFamily: selectedJobFamily }
  }
}

export function handleSelectedPositionTypes(selectedPositionType) {
 
  return {
    
    type: types.HANDLE_SELECTEDPOSITIONTYPES,
    data: { selectedPositionType: selectedPositionType }
  }
}

export function handleSelectedStaff(selectedStaff) {
  return {
    type: types.HANDLE_SELECTEDSTAFF,
    data: { selectedStaff: selectedStaff }
  }
}

export function handleFilter(filter) {
  return {
    type: types.HANDLE_FILTER,
    data: { filter: filter }
  }
}