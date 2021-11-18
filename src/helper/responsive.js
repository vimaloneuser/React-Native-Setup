import { Dimensions, PixelRatio } from 'react-native';

const dpi = PixelRatio.get()


const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

/**
 * Returns true of the screen is in landscape mode
 */
const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};

const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;

const relativeWidth = num => (myWidth * num) / 100;
const relativeHeight = num => (myHeight * num) / 100;

const relativeFontSize = (fontSize) => {
    let fontSizeDpi = fontSize / dpi;
    return PixelRatio.getPixelSizeForLayoutSize(fontSizeDpi);
};

export default {
    relativeWidth, relativeHeight, relativeFontSize, myWidth, myHeight, isLandscape, isPortrait
};