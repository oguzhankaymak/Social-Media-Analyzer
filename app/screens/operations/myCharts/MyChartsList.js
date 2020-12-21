import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles/MyChartsListStyle';
import ChartTypeCard from '../../../components/chartTypeCard/ChartTypeCard';
import Layout from '../../../components/layout/Layout';

const MyChartsList = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView bounces={false}>
          <View style={styles.chartTypeCardView}>
            <ChartTypeCard type={'today'} title={'Günlük Grafikleriniz'} />
          </View>
          <View style={styles.chartTypeCardView}>
            <ChartTypeCard type={'week'} title={'Haftalık Grafikleriniz'} />
          </View>
          <View style={styles.chartTypeCardView}>
            <ChartTypeCard type={'month'} title={'Aylık Grafikleriniz'} />
          </View>
          <View style={styles.chartTypeCardView}>
            <ChartTypeCard type={'year'} title={'Yıllık Grafikleriniz'} />
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default MyChartsList;
