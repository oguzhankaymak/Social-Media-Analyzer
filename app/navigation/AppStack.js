import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
import AppBottomTabNavigator from './AppBottomTabNavigator';

const AppNavigator = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="appBottomTabNavigator" component={AppBottomTabNavigator} />
  </AppStack.Navigator>
);

export default AppNavigator;
