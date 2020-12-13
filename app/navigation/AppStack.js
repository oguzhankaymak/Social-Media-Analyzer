import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
import AppBottomTabNavigator from './AppBottomTabNavigator';

export default AppNavigator = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="appBottomTabNavigator" component={AppBottomTabNavigator} />
  </AppStack.Navigator>
);
