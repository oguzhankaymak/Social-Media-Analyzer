import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import AppNavigator from './AppStack';
import AuthNavigator from './AuthStack';

const NavigationStack = () => {
  const user = 'user'; //from redux

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {user ? <Stack.Screen name="appNavigator" component={AppNavigator} /> : <AuthNavigator />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
