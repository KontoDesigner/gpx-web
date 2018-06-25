import { ActionTypes as types } from '../../constants/staff/filterConstants'
import { beginAjaxCall, ajaxCallError } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'

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

export function getSourceMarketsSuccess(sourceMarkets) {
  return {
    type: types.GET_SOURCEMARKETS_SUCCESS,
    data: { sourceMarkets: sourceMarkets }
  }
}

export function getSourceMarkets() {
  return async function (dispatch) {
    dispatch(beginAjaxCall())

    try {
      const sourceMarkets = await RestClient.Get(`geography/sourcemarket`)

      dispatch(getSourceMarketsSuccess(sourceMarkets))
    } catch (error) {
      dispatch(ajaxCallError(error))

      throw error
    }
  }
}
