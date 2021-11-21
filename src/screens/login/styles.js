import { StyleSheet } from 'react-native'
import Responsive from '../../helper/responsive'

const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    dummy: {
        width: Responsive.relativeWidth(90),
        height: Responsive.relativeHeight(50),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    }
})

export default styles;

