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
export function handleSelectedTitle(selectedTitle) {
  return {
    type: types.HANDLE_SELECTEDTITLE,
    data: { selectedTitle: selectedTitle }
  }
}

export function handleFilter(filter) {
  return {
    type: types.HANDLE_FILTER,
    data: { filter: filter } 
  }
}  