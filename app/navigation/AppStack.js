import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/bottomTab/01_home/Home';
import AccountScreen from '../screens/bottomTab/03_account/Account';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="account" component={AccountScreen} />
  </Tab.Navigator>
);
