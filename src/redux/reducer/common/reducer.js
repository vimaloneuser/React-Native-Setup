import * as types from '../../constants/actionTypes';
const initial = {
    boarding: false,
    internet: true,
    darkMode: false,
    enableGujarati: false
};
import { offlineActionTypes } from 'react-native-offline';

const commonReducer = (state = initial, action) => {
    switch (action.type) {
        case types.BOARDING_DONE:
            return {
                ...state,
                boarding: action.payload,
            };
        case offlineActionTypes.FETCH_OFFLINE_MODE:
            alert("no internet...")
            return {
                ...state,
            };
        case types.NO_INTERNET:
            return {
                ...state,
            };
        case types.DarkMode:
            return {
                ...state,
                darkMode: action.payload
            };
        case types.LANGUAGE:
            return {
                ...state,
                enableGujarati: action.payload
            };
        default:
            return state;
    }
};
export default commonReducer;