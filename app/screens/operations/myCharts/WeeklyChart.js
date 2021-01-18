import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import { VictoryChart, VictoryTheme, VictoryBar, VictoryLegend, VictoryAxis } from 'victory-native';

import Layout from '../../../components/layout/Layout';
import styles from './styles/WeeklyChartStyle';
import { GlobalStyles } from '../../../theme';
import ChartInfoCard from '../../../components/chartInfoCard/ChartInfoCard';
import ChartContentCard from '../../../components/chartContentCard/ChartContentCard';
import { widthPercentageToDP as wp } from '../../../utils/PercentageCalculator';
import { request } from '../../../utils/Request';
import { generalErrorMessage } from '../../../utils/Functions';

const WeeklyChart = () => {
  const [weeklyCardData, setweeklyCardData] = useState(null);
  const [weeklyChartData, setweeklyChartData] = useState(null);
  const [fetchingData, setfetchingData] = useState(false);

  useEffect(() => {
    getWeeklyData();
  }, []);

  const getWeeklyData = async () => {
    try {
      setfetchingData(true);
      const response = await request.get('/api/stats/weekly-stats');
      if (response.status === 200 && response?.data) {
        if (response?.data?.success) {
          const { weeklyInstagramStats } = response?.data;
          setweeklyCardData(weeklyInstagramStats);
          let chartData = [];
          let splitData;
          let value;
          for (let i = 0; i < weeklyInstagramStats.length; i++) {
            value = {};
            splitData = weeklyInstagramStats[i].date.split(' ');
            value.x = splitData[splitData.length - 1];
            value.y = weeklyInstagramStats[i].followerCount;
            chartData.push(value);
          }
          setweeklyChartData(chartData);
          return setfetchingData(false);
        }
        setfetchingData(false);
        return generalErrorMessage();
      }
      setfetchingData(false);
      return generalErrorMessage();
    } catch (error) {
      setfetchingData(false);
      return generalErrorMessage();
    }
  };
  const _renderChart = () => (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryAxis style={{ axis: { stroke: 'white' } }} />
      <VictoryAxis dependentAxis style={{ axis: { stroke: '#D42FD3' } }} />
      <VictoryBar data={weeklyChartData} style={{ data: { fill: '#97aaed' } }} />
      <VictoryLegend
        x={wp('30%')}
        orientation="horizontal"
        gutter={20}
        data={[
          { name: 'Günler', symbol: { fill: 'white' } },
          { name: 'Takipçi Sayısı', symbol: { fill: '#D42FD3' } },
        ]}
      />
    </VictoryChart>
  );
  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>Haftalık - Takipçi Grafiğiniz</Text>
      </View>
      <ScrollView bounces={false} style={styles.scrollView}>
        {fetchingData || !weeklyChartData ? (
          <View style={GlobalStyles.fCenter}>
            <ActivityIndicator size={'large'} color={'black'} />
          </View>
        ) : (
          _renderChart()
        )}

        <View style={styles.footer}>
          <View style={styles.infoCard}>
            <ChartInfoCard />
          </View>
          {weeklyCardData &&
            weeklyCardData.map((element, index) => (
              <View style={styles.contentCard} key={String(index)}>
                <ChartContentCard data={element.followerCount} datetime={element.date} />
              </View>
            ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default WeeklyChart;
