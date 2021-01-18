import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import { VictoryChart, VictoryTheme, VictoryLine } from 'victory-native';

import Layout from '../../../components/layout/Layout';
import styles from './styles/DailyChartStyle';
import { GlobalStyles } from '../../../theme';
import ChartInfoCard from '../../../components/chartInfoCard/ChartInfoCard';
import ChartContentCard from '../../../components/chartContentCard/ChartContentCard';
import { request } from '../../../utils/Request';
import { generalErrorMessage } from '../../../utils/Functions';

const DailyChart = () => {
  const [dailyCardData, setdailyCardData] = useState(null);
  const [dailyChartData, setdailyChartData] = useState(null);
  const [fetchingData, setfetchingData] = useState(false);

  useEffect(() => {
    getDailyData();
  }, []);

  const getDailyData = async () => {
    try {
      setfetchingData(true);
      const response = await request.get('/api/stats/daily-stats');
      if (response.status === 200 && response?.data) {
        if (response?.data?.success) {
          const { dailyInstagramStats } = response?.data;
          setdailyCardData(dailyInstagramStats);
          let chartData = [];
          let splitData;
          let value;
          for (let i = 0; i < dailyInstagramStats.length; i++) {
            value = {};
            splitData = dailyInstagramStats[i].date.split(' ');
            value.x = splitData[0] + ' ' + splitData[1] + ' ' + splitData[2];
            value.y = dailyInstagramStats[i].followerCount;
            chartData.push(value);
          }
          setdailyChartData(chartData);
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

  const renderChart = () => {
    return (
      <VictoryChart theme={VictoryTheme.material} width={styles.chart.width}>
        <VictoryLine
          data={dailyChartData}
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
          }}
          animate={{
            duration: 500,
            onLoad: { duration: 1000 },
          }}
          width={styles.chart.width}
        />
      </VictoryChart>
    );
  };

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>Günlük - Takipçi Grafiğiniz</Text>
      </View>
      <ScrollView bounces={false}>
        {fetchingData || !dailyChartData ? (
          <View style={GlobalStyles.fCenter}>
            <ActivityIndicator size={'large'} color={'black'} />
          </View>
        ) : (
          renderChart()
        )}

        <View style={styles.footer}>
          <View style={styles.infoCard}>
            <ChartInfoCard />
          </View>
          {dailyCardData &&
            dailyCardData.map((element, index) => (
              <View style={styles.contentCard} key={String(index)}>
                <ChartContentCard data={element.followerCount} datetime={element.date} />
              </View>
            ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default DailyChart;
