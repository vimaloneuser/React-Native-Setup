import { StyleSheet } from 'react-native'
import { Color } from '../../utils/color';
import { useTheme } from '@react-navigation/native';

const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: useTheme().colors.background,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default styles;