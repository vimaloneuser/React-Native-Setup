import React from 'react';
import Home from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../utils/color';
import Responsive from '../helper/responsive';

const Tab = createBottomTabNavigator();

const Authenticated = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Color.PRIMARY,
        inactiveTintColor: Color.DARK_GRAY,
        tabStyle: {
          padding: Responsive.relativeHeight(1)
        },
        style: {
          height: Responsive.relativeHeight(9)
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Dasboard',
          tabBarColor: Color.PRIMARY,
          tabBarIcon: ({ color }) => (
            <Icon name="home-analytics" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: Color.PRIMARY,
          tabBarIcon: ({ color }) => (
            <Icon2 name="notifications-active" color={color} size={26} />
          ),
          tabBarBadge: 23,
          tabBarBadgeStyle: { backgroundColor: Color.PURE_ORANGE }
        }}
      />
    </Tab.Navigator>
  );
};

export default Authenticated;