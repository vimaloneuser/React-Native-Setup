import { Platform, StyleSheet } from 'react-native';
import { Color } from '../../utils/color';
import Responsive from '../../helper/responsive';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Color.PRIMARY,
        width: Responsive.relativeWidth(100),
        height: Responsive.relativeHeight(100),
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === 'ios' ? 20 : 0

    },
    logo: {
        height: Responsive.relativeHeight(100),
        width: '100%',
        alignItems: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 75,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 65
    },
    line: {
        height: Responsive.relativeHeight(0.2),
        width: Responsive.relativeWidth(7),
        backgroundColor: Color.BLACK,

    }
});
export default styles;