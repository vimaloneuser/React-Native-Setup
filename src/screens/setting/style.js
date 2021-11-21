import { StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Responsive from '../../helper/responsive';

const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: useTheme().colors.background,
        justifyContent: "center",
        alignItems: "center"
    },
    switchContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: Responsive.relativeWidth(5)
    }
})
export default styles;