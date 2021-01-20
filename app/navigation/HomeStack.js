import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import MyChartsStack from './stacks/MyChartsStack';
import InstagramOperationStack from './stacks/InstagramOperationStack';
import HomeScreen from '../screens/bottomTab/01_home/Home';
import Contact from '../screens/operations/contact/Contact';
import Advice from '../screens/operations/advice/Advice';

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="contact" component={Contact} />
    <Stack.Screen name="advice" component={Advice} />
    <Stack.Screen name="instagramOperationStack" component={InstagramOperationStack} />
    <Stack.Screen name="chartsStack" component={MyChartsStack} />
  </Stack.Navigator>
);

export default HomeNavigator;
