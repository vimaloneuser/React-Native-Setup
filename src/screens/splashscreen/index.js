import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import Routes from '../../router/routes';
import Navigation from '../../helper/rootNavigation';
import Responsive from '../../helper/responsive';
import { connect } from 'react-redux';
import { StatusBar } from '../../components';

const mapStateToProps = state => {
  return {
    login: state.login,
    common: state.common
  };
};

class SplashScreen extends React.Component {
  componentDidMount() {
    this.checkAuthentication();
  }

  checkAuthentication = async () => {
    setTimeout(() => {
      let { token } = this.props.login;
      this.goTo(token != undefined && token != "");
    }, 2000);
  };

  goTo = isAlreadyLoggedIn => {
    if (!isAlreadyLoggedIn) {
      let { boarding } = this.props.common;
      if (boarding)
        Navigation.navigate({ route: Routes.NotAuthenticated, reset: true });
      else
        Navigation.navigate({ route: Routes.Boarding, reset: true });
    }
    else
      Navigation.navigate({ route: Routes.Authenticated, reset: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          source={require('../../assets/images/splash.jpg')}
          style={styles.logo}
        />
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{ position: "absolute", bottom: Responsive.relativeWidth(3) }}
        />
      </View>
    );
  }
}
export default connect(mapStateToProps, '')(SplashScreen);
