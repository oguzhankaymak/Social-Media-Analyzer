import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from '../screens/bottomTab/01_home/Home';
import OperationStack from './stacks/OperationStack';

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="operationStack" component={OperationStack} />
  </Stack.Navigator>
);

export default HomeNavigator;
