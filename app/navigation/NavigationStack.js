import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

import AppBottomTabNavigator from './AppBottomTabNavigator';
import AuthNavigator from './AuthStack';

const NavigationStack = () => {
  const user = useSelector((state) => state.userItem.user);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {user ? (
          <Stack.Screen name="appBottomTabNavigator" component={AppBottomTabNavigator} />
        ) : (
          <Stack.Screen name="authNavigator" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
