import { ActionTypes as types } from '../../constants/setting/settingConstants'



export function handleSelectedSetting(selectedSetting) {
  return {
    type: types.HANDLE_SELECTEDSETTING,
    data: { selectedSetting: selectedSetting }
  }
}

