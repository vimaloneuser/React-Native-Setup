import { StyleSheet } from 'react-native'
import { Color } from '../../utils/color'
import Responsive from '../../helper/responsive'

const styles = () => StyleSheet.create({
    introImageStyle: {
        width: '100%',
        height: '100%'
    },
    buttonCircle: {
        marginTop: 4,
        width: 40,
        height: 40,
        backgroundColor: Color.BLUE,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        backgroundColor: Color.DARK_GRAY,
    },
    activeDotStyle: {
        backgroundColor: Color.BLUE,
    },
});

export default styles