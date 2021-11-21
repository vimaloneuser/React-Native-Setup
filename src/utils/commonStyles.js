import { StyleSheet } from "react-native";
import { Color } from "./color";
import Responsive from "../helper/responsive";
import { useTheme } from '@react-navigation/native';

const styles = () => StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: useTheme().colors.background
    },
    content1: {
        flex: 1,
        backgroundColor: Color.BG_COLOR
    },
    Gradient: {
        width: Responsive.relativeWidth(100),
        // height: Responsive.relativeHeight(100),
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        alignSelf: 'center',
        height: Responsive.relativeHeight(20),
        width: Responsive.relativeWidth(45),
        marginTop: 150
    },
    content: {
        height: Responsive.relativeHeight(62),
        width: Responsive.relativeWidth(100),
        paddingHorizontal: 20,
        backgroundColor: Color.WHITE,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    ls_container: {
        width: "100%",
        height: "20%",
        top: Responsive.relativeWidth(5),
        marginBottom: Responsive.relativeWidth(8),
    },
    ls_container2: {
        width: "100%",
        justifyContent: "center"
    },
    ls_container3: {
        marginTop: Responsive.relativeHeight(10),
        alignItems: "center",
        paddingBottom: Responsive.relativeWidth(5),
        marginBottom: Responsive.relativeHeight(5)
    },
    border: {
        width: '100%',
        alignItems: "flex-start"
    },
    endLine: {
        borderWidth: 0.5,
        borderColor: Color.DARK_GRAY,
        marginVertical: 3,
        opacity: 0.5,
        marginHorizontal: 30,
    },
    modalStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Color.BLACK,
        borderTopStartRadius: 18,
        borderTopEndRadius: 18,
    },
    nointernetMessage: {
        justifyContent: 'center',
        height: 100,
        width: '100%',
        backgroundColor: Color.PRIMARY_DARK,
        alignItems: 'center',
    },
    screenOverlay: {
        flex: 1,
    }
})

export default styles;
