import * as types from '../../constants/actionTypes';

export const loginUserAction = (param,cb) => {
  debugger
  return {
    type: types.LOGIN_USER,
    payload: {param,cb}
  }
}
