import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import InstagramOperationList from '../../screens/operations/instagram/InstagramOperationList';

const InstagramOperationStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="instagramOperationList" component={InstagramOperationList} />
  </Stack.Navigator>
);

export default InstagramOperationStack;
