import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Contact from '../../screens/operations/contact/Contact';

const OperationStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="contact" component={Contact} />
  </Stack.Navigator>
);

export default OperationStack;
