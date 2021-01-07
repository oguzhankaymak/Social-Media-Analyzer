import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import InstagramOperationList from '../../screens/operations/instagram/InstagramOperationList';
import InstagramOperation from '../../screens/operations/instagram/InstagramOperation';

const InstagramOperationStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="instagramOperationList" component={InstagramOperationList} />
    <Stack.Screen name="instagramOperation" component={InstagramOperation} />
  </Stack.Navigator>
);

export default InstagramOperationStack;
