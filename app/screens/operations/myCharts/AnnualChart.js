import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory-native';

import Layout from '../../../components/layout/Layout';
import styles from './styles/AnnualChartStyle';
import { GlobalStyles } from '../../../theme';
import ChartInfoCard from '../../../components/chartInfoCard/ChartInfoCard';
import ChartContentCard from '../../../components/chartContentCard/ChartContentCard';
import { ChartMock } from '../../../mock';

const AnnualChart = () => {
  const [annualCardData, setannualCardData] = useState(null);
  const [annualChartData, setannualChartData] = useState(null);
  const [fetchingData, setfetchingData] = useState(false);

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

  var shortMonths = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];

  useEffect(() => {
    getAnnualChartData();
  }, []);

  const getAnnualChartData = () => {
    setTimeout(() => {
      setfetchingData(true);
      let chartData = [],
        cardData = [],
        value,
        split;

      for (let i = 0; i < ChartMock.statisticsByYear.length; i++) {
        value = {};
        split = ChartMock.statisticsByYear[i].x.split(' ');
        value.x = shortMonths[split[0] - 1];
        value.y = ChartMock.statisticsByYear[i].y;
        chartData.push(value);

        value = {};
        value.x = split[1] + ' ' + months[split[0] - 1];
        value.y = ChartMock.statisticsByYear[i].y;
        cardData.push(value);
      }
      setannualCardData(cardData);
      setannualChartData(chartData);
      setfetchingData(false);
    }, 1000);
  };

  const renderChart = () => {
    return (
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryScatter style={{ data: { fill: '#c43a31' } }} size={7} data={annualChartData} />
      </VictoryChart>
    );
  };

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>Yıllık - Takipçi Grafiğiniz</Text>
      </View>
      <ScrollView bounces={false}>
        {fetchingData || !annualChartData ? (
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
          {annualCardData &&
            annualCardData.map((element, index) => (
              <View style={styles.contentCard} key={String(index)}>
                <ChartContentCard data={element.y} datetime={element.x + ' ayı'} />
              </View>
            ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default AnnualChart;
