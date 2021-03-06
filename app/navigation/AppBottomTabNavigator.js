import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeNavigator from './HomeStack';
import AccountScreen from '../screens/bottomTab/03_account/Account';
import { HomeIcon, UserIcon } from '../components/icons';

const AppBottomTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: { height: 50 },
      tabStyle: { height: 50 },
    }}>
    <Tab.Screen
      name="homeNavigator"
      component={HomeNavigator}
      options={{
        tabBarLabel: 'Anasayfa',
        tabBarIcon: ({ color, size }) => <HomeIcon name="home" color={color} width={24} height={24} />,
      }}
    />
    <Tab.Screen
      name="account"
      component={AccountScreen}
      options={{
        tabBarLabel: 'Hesabım',
        tabBarIcon: ({ color, size }) => <UserIcon name="home" color={color} width={24} height={24} />,
      }}
    />
  </Tab.Navigator>
);

export default AppBottomTabNavigator;
