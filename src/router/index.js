import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NonAuthenticated from './nonAuthentication';
import Authenticated from './authentication';
import SplashScreen from '../screens/splashscreen';
import Routes from './routes';
import Boarding from '../screens/boarding';
import { navigationRef } from '../helper/rootNavigation';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator initialRouteName={Routes.SplashScreen} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={Routes.NotAuthenticated} component={NonAuthenticated} />
        <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
        <Stack.Screen name={Routes.Boarding} component={Boarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
