import apiMethods from '../utils/constants'
import { axiosInstance } from './serviceInstance';
import CommonHelper from '../helper/common';
import { checkInternetConnection } from 'react-native-offline';;

const axiosApiCall = (method, url, params) => {
    switch (method) {
        case apiMethods.apiMethods.POST:
            return axiosInstance.post(url, params);
        case apiMethods.apiMethods.PUT:
            return axiosInstance.put(url, params);
        case apiMethods.apiMethods.DELETE:
            return axiosInstance.delete(url, params);
        default:
            return axiosInstance.get(url);
    }
}

export const callService = async ({ url, method = "", params = {}, showMsg = false, setLoading = null }) => {
    return checkInternetConnection().then(async isConnected => {
        if (isConnected) {
            try {
                if (setLoading)
                    setLoading(true);
                let result = await axiosApiCall(method, url, params);
                if (setLoading)
                    setLoading(false);
                return result.data;
            } catch (error) {
                if (showMsg && error?.response)
                    CommonHelper.notifyMsg({ message: error.response.data.error, success: false });
                if (setLoading)
                    setLoading(false);
                return
            }
        } else {
            CommonHelper.notifyMsg({ message: "No internet connection!", success: false });
            return;
        }
    });
}