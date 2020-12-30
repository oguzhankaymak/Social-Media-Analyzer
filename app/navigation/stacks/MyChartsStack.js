import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import MyChartsList from '../../screens/operations/myCharts/MyChartsList';
import DailyChart from '../../screens/operations/myCharts/DailyChart';

const MyChartsStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="myChartsList" component={MyChartsList} />
    <Stack.Screen name="dailyChart" component={DailyChart} />
  </Stack.Navigator>
);

export default MyChartsStack;
