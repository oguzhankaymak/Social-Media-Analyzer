import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import MyChartsList from '../../screens/operations/myCharts/MyChartsList';
import DailyChart from '../../screens/operations/myCharts/DailyChart';
import WeeklyChart from '../../screens/operations/myCharts/WeeklyChart';

const MyChartsStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="myChartsList" component={MyChartsList} />
    <Stack.Screen name="dailyChart" component={DailyChart} />
    <Stack.Screen name="weeklyChart" component={WeeklyChart} />
  </Stack.Navigator>
);

export default MyChartsStack;
