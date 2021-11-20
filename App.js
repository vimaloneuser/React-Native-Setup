import React, { useState, useEffect } from 'react'
import { RootNavigator } from './src/router'
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import { View, Dimensions } from 'react-native';
import Style from './src/utils/commonStyles'
import Spinner from 'react-native-loading-spinner-overlay';
import { Label } from './src/components';
import { Color } from './src/utils/color';
import Common from './src/helper/common';
import Responsive from './src/helper/responsive';
import RNRestart from 'react-native-restart';

export const Loading = React.createContext();

const App = () => {

  const [loading, setLoading] = useState(false);
  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  Dimensions.addEventListener('change', () => {
    let mode = Responsive.isPortrait() ? "Portrait" : "Landscape";
    showLoader(true);
    Common.notifyMsg({
      message: `${mode} is turned on. Please wait... Application is being reloaded`
    });
    setTimeout(() => {
      RNRestart.Restart();
    }, 2000);
  });

  return (
    <Provider store={store}>
      <NetworkProvider>
        <NetworkConsumer>
          {({ isConnected }) => (
            <View style={{ flex: 1 }} >
              <Loading.Provider value={{
                showLoader,
                hideLoader
              }}>
                <Loading.Consumer>
                  {
                    (fn) => (
                      <>
                        <Spinner
                          visible={loading}
                          textStyle={{ color: Color.WHITE }}
                        />
                        {
                          isConnected != undefined && !isConnected &&
                          <View style={Style.nointernetMessage}>
                            <Label bolder xsmall color={Color.WHITE}>No Internet connection !</Label>
                          </View>
                        }
                        <RootNavigator {...fn} />
                      </>
                    )
                  }
                </Loading.Consumer>
              </Loading.Provider>
            </View>
          )}
        </NetworkConsumer>
      </NetworkProvider>
    </Provider>

  );
};


export default App;