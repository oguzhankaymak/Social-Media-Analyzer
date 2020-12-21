import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import MyChartsList from '../../screens/operations/myCharts/MyChartsList';

const MyChartsStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="myChartsList" component={MyChartsList} />
  </Stack.Navigator>
);

export default MyChartsStack;
