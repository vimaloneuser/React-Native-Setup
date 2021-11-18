import Snackbar from 'react-native-snackbar';
import { Color } from '../utils/color';
import Toast from 'react-native-toast-message';

const notifyMsg = ({ message, success = true }) => {
    setTimeout(() => {
        Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
            textColor: success ? Color.WHITE : Color.ERROR,
            backgroundColor: Color.PRIMARY
        });
    }, 200);
};

const showToast = ({ message, success = true }) => {
    Toast.show({
        type: 'success',
        text1: message
    });
};



export default { notifyMsg, showToast }