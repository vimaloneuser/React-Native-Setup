import { StyleSheet } from "react-native";
import { Color } from "../../../utils/color";
import Responsive from "../../../helper/responsive";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: Color.PRIMARY,
        backgroundColor: Color.WHITE,
        borderRadius: 10,
        borderWidth: 2,
        height: Responsive.relativeHeight(9),
        width: Responsive.relativeWidth(90),
        alignItems: 'center',
        justifyContent:"center"
    },
    username: {
        borderColor: Color.PRIMARY,
        fontSize: Responsive.relativeFontSize(16),
        width:"72%",

    },
    iconStyle: {
        fontSize: 25,
        color: Color.BLACK,
        width:"13%",
        textAlign:"center"
    },
    eyeIcon: {
        width:"10%"
    },
})

export default styles;