import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppStack';
import AuthNavigator from './AuthStack';

const NavigationStack = () => {
  const user = 'user'; //from redux

  return <NavigationContainer>{user ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default NavigationStack;
