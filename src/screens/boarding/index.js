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
import { Label } from '../../components'

const slides = [
  {
    key: 's1',
    image: 'https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    key: 's2',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1lcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    key: 's3',
    image: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1lcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
  },
];

const RenderItem = ({ item }) => {

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
    Navigation.navigate({ route: Routes.NotAuthenticated, reset: true });
  };

  const RenderNextButton = () => {
    return (
      <View style={styles().buttonCircle}>
        <Icon name="arrow-right" style={{ fontSize: 25, color: Color.WHITE }} />
      </View>
    );
  };
  const RenderDoneButton = props => {
    return (
      <TouchableOpacity onPress={onDone}>
        <View style={styles().buttonCircle}>
          <Icon
            name="check"
            style={{ fontSize: 25, fontWeight: 'bold', color: Color.WHITE }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              backgroundColor: Color.WHITE,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Image style={styles().introImageStyle} source={{ uri: item.image }} />
          </View>
        )}
        renderDoneButton={RenderDoneButton}
        renderNextButton={RenderNextButton}
        dotStyle={styles().dotStyle}
        activeDotStyle={styles().activeDotStyle}
      />
    </>
  );
}

export default connect('', mapDispatchToProps)(Boarding);
