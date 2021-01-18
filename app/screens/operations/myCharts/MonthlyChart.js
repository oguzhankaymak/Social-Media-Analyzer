import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import { VictoryPie, VictoryLabel } from 'victory-native';

import Layout from '../../../components/layout/Layout';
import styles from './styles/MonthlyChartStyle';
import { GlobalStyles } from '../../../theme';
import ChartInfoCard from '../../../components/chartInfoCard/ChartInfoCard';
import ChartContentCard from '../../../components/chartContentCard/ChartContentCard';
import { ChartMock } from '../../../mock';
import { request } from '../../../utils/Request';
import { generalErrorMessage } from '../../../utils/Functions';

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

  const getMonthlyData = async () => {
    try {
      setfetchingData(true);
      const response = await request.get('/api/stats/monthly-stats');
      if (response.status === 200 && response?.data) {
        if (response?.data?.success) {
          const { monthlyInstagramStats } = response?.data;
          setmonthlyCardData(monthlyInstagramStats);
          let chartData = [];
          let value;
          for (let i = 0; i < monthlyInstagramStats.length; i++) {
            value = {};
            value.x = monthlyInstagramStats[i].week;
            value.y = monthlyInstagramStats[i].followerCount;
            chartData.push(value);
          }
          setmonthlyChartData(chartData);
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
                <ChartContentCard
                  data={element.followerCount}
                  datetime={`${months[currentMonth]} ayı  ` + element.week}
                />
              </View>
            ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default DailyChart;
