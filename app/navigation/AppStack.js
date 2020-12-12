import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/bottomTab/01_home/Home';
import AccountScreen from '../screens/bottomTab/03_account/Account';
import { HomeIcon, UserIcon } from '../components/icons';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Anasayfa',
        tabBarIcon: ({ color, size }) => <HomeIcon name="home" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="account"
      component={AccountScreen}
      options={{
        tabBarLabel: 'Hesabım',
        tabBarIcon: ({ color, size }) => <UserIcon name="home" color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);
