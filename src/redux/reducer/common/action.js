import * as types from '../../constants/actionTypes';

export const onBoardingDoneAction = (status) => {
  return {
    type: types.BOARDING_DONE,
    payload: status
  }
}

export const logOutAction = () => {
  return {
    type: types.LOGOUT
  }
}

export const darkMode = (value) => {
  return {
    type: types.DarkMode,
    payload: value
  }
}

export const languageChange = (value) => {
  return {
    type: types.LANGUAGE,
    payload: value
  }
}

