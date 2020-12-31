import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import { VictoryChart, VictoryTheme, VictoryLine } from 'victory-native';

import Layout from '../../../components/layout/Layout';
import styles from './styles/DailyChartStyle';
import { GlobalStyles } from '../../../theme';
import ChartInfoCard from '../../../components/chartInfoCard/ChartInfoCard';
import ChartContentCard from '../../../components/chartContentCard/ChartContentCard';

const DailyChart = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const chartData = [
    { x: '9 - 10', y: 300 },
    { x: '13 - 14', y: 302 },
    { x: '17 - 18', y: 290 },
    { x: '21 - 22', y: 330 },
  ];

  const renderChart = () => {
    return (
      <VictoryChart theme={VictoryTheme.material} width={styles.chart.width}>
        <VictoryLine
          data={chartData}
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
        <Text style={styles.title}>Saat - Takipçi Saysı Grafiğiniz</Text>
      </View>
      <ScrollView bounces={false}>
        {loading ? (
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
          <View style={styles.contentCard}>
            <ChartContentCard data={300} datetime={'01 Ocak 2021 9.00 - 10.00'} />
          </View>
          <View style={styles.contentCard}>
            <ChartContentCard data={302} datetime={'01 Ocak 2021 13.00 - 14.00'} />
          </View>
          <View style={styles.contentCard}>
            <ChartContentCard data={290} datetime={'01 Ocak 2021 17.00 - 18.00'} />
          </View>
          <View style={styles.contentCard}>
            <ChartContentCard data={330} datetime={'01 Ocak 2021 21.00 - 22.00'} />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default DailyChart;
