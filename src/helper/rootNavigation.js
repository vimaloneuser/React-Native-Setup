import { CommonActions } from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

const navigate = ({ route, param = {}, reset = false }) => {
    if (navigationRef.isReady()) {
        if (!reset)
            navigationRef.navigate(route, param);
        else
            navigationRef.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: route }],
                })
            );
    }
};

export default {
    navigate
}