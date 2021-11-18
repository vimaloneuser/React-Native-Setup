import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import Routes from './routes'
import SignUp from '../screens/signup';

const Stack = createNativeStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={Routes.Login}
        >
            <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SignUp} component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default NotAuthenticated;