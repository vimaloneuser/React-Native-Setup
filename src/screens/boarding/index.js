import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Routes from '../../router/routes';
import { Color } from '../../utils/color';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/Octicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onBoardingDoneAction } from '../../redux/reducer/common/action'
import Navigation from '../../helper/rootNavigation';
import {Label} from '../../components'

const slides = [
  {
    key: 's1',
    text: 'Want to move!',
    title: 'Best offers',
    image: require('../../assets/images/slider1.png'),
  },
  {
    key: 's2',
    title: 'Move Luggage Easily',
    text: 'Helper will pack all luggage and help to Transfer',
    image: require('../../assets/images/slider2.png'),
  },
  {
    key: 's3',
    title: 'Track Your Luggage Location',
    text: 'Enjoy our all services',
    image: require('../../assets/images/slider3.png'),
  },
];

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Color.WHITE,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        {/* <Label mt={40} align="center" xxxxlarge bolder>
          {item.title}
        </Label> */}
        <Image style={styles.introImageStyle} source={item.image} />
        {/* <Label mt={30} align="center" xlarge>
          {item.text}
        </Label> */}
      </View>
    );
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    onBoardingDoneAction
  },
    dispatch,
  );

const Boarding = (props) => {
  const onDone = () => {
    props.onBoardingDoneAction(true);
    Navigation.navigate({ route: Routes.NotAuthenticated });
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-right" style={{ fontSize: 25, color: Color.WHITE }} />
      </View>
    );
  };
  const RenderDoneButton = props => {
    return (
      <TouchableOpacity onPress={onDone}>
        <View style={styles.buttonCircle}>
          <Icon
            name="check"
            style={{ fontSize: 25, fontWeight: 'bold', color: Color.WHITE }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      renderDoneButton={RenderDoneButton}
      renderNextButton={RenderNextButton}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    />
  );
}

export default connect('', mapDispatchToProps)(Boarding);
