import { Platform, StyleSheet } from 'react-native';
import { Color } from '../../utils/color';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Color.PRIMARY,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === 'ios' ? 20 : 0

    },
    logo: {
        height: 40,
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
        height: 40,
        width: 40,
        backgroundColor: Color.BLACK,

    }
});
export default styles;