import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NonAuthenticated from './nonAuthentication';
import Authenticated from './authentication';
import Routes from './routes';
import Boarding from '../screens/boarding';
import { navigationRef } from '../helper/rootNavigation';
import SplashScreen from 'react-native-splash-screen';
import store from '../redux/store';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {

  const [initialRoute, setInitialRoute] = useState(null);

  store.subscribe(listener);

  function listener() {
    if (store.getState() !== undefined) {
      let { token } = store.getState().login;
      setRoute(token != undefined && token != "");
      setTimeout(() => {
        SplashScreen.hide();
      });
    }
  }

  const setRoute = isAlreadyLoggedIn => {
    if (isAlreadyLoggedIn) { setInitialRoute(Routes.Authenticated); return }
    let { boarding } = store.getState().common;
    boarding ? setInitialRoute(Routes.NotAuthenticated) : setInitialRoute(Routes.Boarding);
  };

  return (
    <NavigationContainer ref={navigationRef} >
      {
        initialRoute &&
        <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Routes.NotAuthenticated} component={NonAuthenticated} />
          <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
          <Stack.Screen name={Routes.Boarding} component={Boarding} />
        </Stack.Navigator>
      }

    </NavigationContainer>
  );
};
