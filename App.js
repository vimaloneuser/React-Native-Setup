import React, { useState, useEffect } from 'react'
import { RootNavigator } from './src/router'
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import { View, Dimensions } from 'react-native';
import commonStyles from './src/utils/commonStyles'
import Spinner from 'react-native-loading-spinner-overlay';
import { Label } from './src/components';
import { Color } from './src/utils/color';
import Common from './src/helper/common';
import Responsive from './src/helper/responsive';
import RNRestart from 'react-native-restart';
import SplashScreen from 'react-native-splash-screen';

export const Loading = React.createContext({ loading: false, setLoading: () => { } });

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    });
  }, [])

  const [loading, setLoading] = useState(false);
  const loadingfn = { loading, setLoading };

  Dimensions.addEventListener('change', () => {
    let mode = Responsive.isPortrait() ? "Portrait" : "Landscape";
    Common.notifyMsg({
      message: `${mode} is turned on. Please wait... Application is being reloaded`
    });
  });

  return (
    <Provider store={store}>
      <NetworkProvider>
        <NetworkConsumer>
          {({ isConnected }) => (
            <View style={{ flex: 1 }} >
              <Loading.Provider value={loadingfn}>
                <Spinner
                  visible={loading}
                  textStyle={{ color: Color.WHITE }}
                />
                {
                  isConnected != undefined && !isConnected &&
                  <View style={{
                    justifyContent: 'center',
                    height: 50,
                    width: '100%',
                    backgroundColor: Color.PRIMARY_DARK,
                    alignItems: 'center',
                  }}>
                    <Label bolder xsmall color={Color.WHITE}>No Internet connection !</Label>
                  </View>
                }
                <RootNavigator />
              </Loading.Provider>
            </View>
          )}
        </NetworkConsumer>
      </NetworkProvider>
    </Provider>

  );
};


export default App;