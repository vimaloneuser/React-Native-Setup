import { useContext } from 'react'
import * as types from '../constants/actionTypes';
import { put, call } from 'redux-saga/effects';
import Routes from '../../router/routes';
import { callService } from '../../services';
import apiUrl from '../../services/serverEndpoints';
import Navigation from '../../helper/rootNavigation';
import CommonHelper from '../../helper/common';

export function* loginUser(action) {
    try {
        const result = yield call(callService, {
            url: apiUrl.login,
            method: 'POST',
            params: action.payload.param,
            showMsg: true
        });
        if (result) {
            if (result?.token) {
                yield put({ type: types.LOGIN_USER_SUCCESS, payload: result.token });
                Navigation.navigate({ route: Routes.Authenticated, reset: true });
                CommonHelper.notifyMsg({ message: "Login Success" });
            }
            action.payload.cb();
        }
    } catch (error) {
        action.payload.cb();
    }
}
