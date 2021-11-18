import * as types from '../../constants/actionTypes';
import Navigation from '../../../helper/rootNavigation';
import Routes from '../../../router/routes';
import CommonHelper from '../../../helper/common';

const initial = {
    user: {},
    token: ''
};

const loginReducer = (state = initial, action) => {
    switch (action.type) {
        case types.LOADING_START:
            return {
                ...state,
                loading: action.payload,
            };
        case types.LOGIN_USER_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                user: {
                    name: "Vimal Patel",
                    email: "v@gmail.com"
                },
                token: action.payload,
            };
        case types.LOGIN_USER_FAILURE:
            return {
                ...state,
            };
        case types.LOGOUT:
            setTimeout(() => {
                CommonHelper.notifyMsg({ message: "Log out successfully" })
                Navigation.navigate({ route: Routes.NotAuthenticated, reset: true })
            }, 200);
            return {
                ...state,
                user: {},
                token: ''
            };
        default:
            return state;
    }
};
export default loginReducer;