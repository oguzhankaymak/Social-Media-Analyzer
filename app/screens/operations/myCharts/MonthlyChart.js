import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import { VictoryPie, VictoryLabel } from 'victory-native';

import Layout from '../../../components/layout/Layout';
import styles from './styles/MonthlyChartStyle';
import { GlobalStyles } from '../../../theme';
import ChartInfoCard from '../../../components/chartInfoCard/ChartInfoCard';
import ChartContentCard from '../../../components/chartContentCard/ChartContentCard';
import { ChartMock } from '../../../mock';

const DailyChart = () => {
  const [monthlyCardData, setmonthlyCardData] = useState(null);
  const [monthlyChartData, setmonthlyChartData] = useState(null);
  const [fetchingData, setfetchingData] = useState(false);

  const currentMonth = new Date().getMonth();
  var months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];

  useEffect(() => {
    getMonthlyData();
  }, []);

  const getMonthlyData = () => {
    setTimeout(() => {
      setfetchingData(true);
      setmonthlyCardData(ChartMock.statisticsByMonth);
      setmonthlyChartData(ChartMock.statisticsByMonth);
      setfetchingData(false);
    }, 1000);
  };

  const renderChart = () => {
    return (
      <VictoryPie
        innerRadius={75}
        data={monthlyChartData}
        padAngle={10}
        labels={({ datum, index }) => `${datum.x}`}
        labelComponent={<VictoryLabel angle={45} />}
      />
    );
  };

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>Aylık - Takipçi Grafiğiniz</Text>
      </View>
      <ScrollView bounces={false}>
        {fetchingData || !monthlyChartData ? (
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
          {monthlyCardData &&
            monthlyCardData.map((element, index) => (
              <View style={styles.contentCard} key={String(index)}>
                <ChartContentCard data={element.y} datetime={`${months[currentMonth]} ayı  ` + element.x} />
              </View>
            ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default DailyChart;
