import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import InstagramOperationList from '../../screens/operations/instagram/InstagramOperationList';
import InstagramOperation from '../../screens/operations/instagram/InstagramOperation';
import Followers from '../../screens/operations/instagram/Followers';
import Following from '../../screens/operations/instagram/Following';
import NotToBeFollowed from '../../screens/operations/instagram/NotToBeFollowed';

const InstagramOperationStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="instagramOperationList" component={InstagramOperationList} />
    <Stack.Screen name="instagramOperation" component={InstagramOperation} />
    <Stack.Screen name="followers" component={Followers} />
    <Stack.Screen name="following" component={Following} />
    <Stack.Screen name="notToBeFollowed" component={NotToBeFollowed} />
  </Stack.Navigator>
);

export default InstagramOperationStack;
