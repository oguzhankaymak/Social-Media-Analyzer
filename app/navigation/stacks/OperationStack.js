import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Contact from '../../screens/operations/contact/Contact';
import MyChartsStack from './MyChartsStack';

const OperationStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="contact" component={Contact} />
    <Stack.Screen name="myChartsStack" component={MyChartsStack} />
  </Stack.Navigator>
);

export default OperationStack;
