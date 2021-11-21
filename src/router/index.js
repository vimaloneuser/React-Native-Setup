import React, { useState, useEffect, createContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import NonAuthenticated from './nonAuthentication';
import Authenticated from './authentication';
import Routes from './routes';
import Boarding from '../screens/boarding';
import { navigationRef } from '../helper/rootNavigation';
import store from '../redux/store';
import languages from '../utils/lang/language';

const Stack = createNativeStackNavigator();

export const ThemeContext = React.createContext({
  darkMode: false,
  setDarkMode: () => { }
});

export const LanguageContext = React.createContext({
  language: languages.english,
  setLanguage: () => { }
});

export const RootNavigator = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(languages.english);

  useEffect(() => {
    setTimeout(() => {
      listener();
    });
  }, [])

  store.subscribe(listener);
  function listener() {
    if (store.getState() !== undefined) {
      let { token } = store.getState().login;
      let { darkMode } = store.getState().common;
      let { enableGujarati } = store.getState().common;
      if (enableGujarati)
        setLanguage(languages.gujarati);
      if (darkMode)
        setDarkMode(darkMode);
      setRoute(token != undefined && token != "");
    }
  }

  const setRoute = isAlreadyLoggedIn => {
    if (isAlreadyLoggedIn) { setInitialRoute(Routes.Authenticated); return }
    let { boarding } = store.getState().common;
    boarding ? setInitialRoute(Routes.NotAuthenticated) : setInitialRoute(Routes.Boarding);
  };

  const mode = { darkMode, setDarkMode };
  const modeMode = { language, setLanguage };

  return (
    <ThemeContext.Provider value={mode}>
      <LanguageContext.Provider value={modeMode} >
        <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme} ref={navigationRef} >
          {
            initialRoute &&
            <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
              <Stack.Screen name={Routes.NotAuthenticated} component={NonAuthenticated} />
              <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
              <Stack.Screen name={Routes.Boarding} component={Boarding} />
            </Stack.Navigator>
          }
        </NavigationContainer>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};
