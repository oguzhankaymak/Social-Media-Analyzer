import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import MyChartsList from '../../screens/operations/myCharts/MyChartsList';
import DailyChart from '../../screens/operations/myCharts/DailyChart';
import WeeklyChart from '../../screens/operations/myCharts/WeeklyChart';
import MonthlyChart from '../../screens/operations/myCharts/MonthlyChart';
import AnnualChart from '../../screens/operations/myCharts/AnnualChart';

const MyChartsStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="chartsList" component={MyChartsList} />
    <Stack.Screen name="dailyChart" component={DailyChart} />
    <Stack.Screen name="weeklyChart" component={WeeklyChart} />
    <Stack.Screen name="monthlyChart" component={MonthlyChart} />
    <Stack.Screen name="annualChart" component={AnnualChart} />
  </Stack.Navigator>
);

export default MyChartsStack;
