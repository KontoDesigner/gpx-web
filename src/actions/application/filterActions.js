import { ActionTypes as types } from '../../constants/application/filterConstants'

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
export function handleSelectedJump(selectedJump) {
  debugger;
  return {
 
    type: types.HANDLE_SELECTEDJUMP,
    data: { selectedJump: selectedJump }
  }
}
export function handleSelectedJobFamily(selectedJobFamily) {
  debugger;
  return {
 
    type: types.HANDLE_SELECTEDJOBFAMILY,
    data: { selectedJobFamily: selectedJobFamily }
  }
}
export function handleSelectedJobTitle(selectedJobTitle) {
 debugger;
  return {
    
    type: types.HANDLE_SELECTEDJOBTITLE,
    data: { selectedJobTitle: selectedJobTitle }
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