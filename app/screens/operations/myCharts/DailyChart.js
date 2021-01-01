import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import { VictoryChart, VictoryTheme, VictoryLine } from 'victory-native';

import Layout from '../../../components/layout/Layout';
import styles from './styles/DailyChartStyle';
import { GlobalStyles } from '../../../theme';
import ChartInfoCard from '../../../components/chartInfoCard/ChartInfoCard';
import ChartContentCard from '../../../components/chartContentCard/ChartContentCard';
import { ChartMock } from '../../../mock';

const DailyChart = () => {
  const [dailyCardData, setdailyCardData] = useState(null);
  const [dailyChartData, setdailyChartData] = useState(null);
  const [fetchingData, setfetchingData] = useState(false);

  useEffect(() => {
    getDailyData();
  }, []);

  const getDailyData = () => {
    setTimeout(() => {
      setfetchingData(true);
      setdailyCardData(ChartMock.statisticsByDay);
      let chartData = [];
      let value;
      for (let i = 0; i < ChartMock.statisticsByDay.length; i++) {
        value = {};
        value.x = ChartMock.statisticsByDay[i].x.split('  ')[1];
        value.y = ChartMock.statisticsByDay[i].y;
        chartData.push(value);
      }
      setdailyChartData(chartData);
      setfetchingData(false);
    }, 1000);
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
                <ChartContentCard data={element.y} datetime={element.x} />
              </View>
            ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default DailyChart;
