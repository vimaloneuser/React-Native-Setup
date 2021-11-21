import { StyleSheet } from 'react-native'
import { Color } from '../../../utils/color'
import Responsive from "../../../helper/responsive";

const styles = () => StyleSheet.create({
    main_container: {
        alignItems: 'center'
    },
    button: {
        width: Responsive.relativeWidth(90),
        height: Responsive.relativeHeight(11),
        borderRadius: Responsive.relativeWidth(3),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Responsive.relativeWidth(3)
    },
    text: {
        color: Color.WHITE,
        fontSize: Responsive.relativeFontSize(18),
        fontWeight: 'bold'
    },
})

export default styles