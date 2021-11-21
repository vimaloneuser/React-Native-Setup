import * as types from '../../constants/actionTypes';

export const loginUserAction = (param, setLoading) => {
  debugger
  return {
    type: types.LOGIN_USER,
    payload: { param, setLoading }
  }
}
