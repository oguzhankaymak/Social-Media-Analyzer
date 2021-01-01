import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles/MyChartsListStyle';
import ChartTypeCard from '../../../components/chartTypeCard/ChartTypeCard';
import Layout from '../../../components/layout/Layout';

const MyChartsList = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView bounces={false}>
          <View style={styles.chartTypeCardView}>
            <ChartTypeCard
              type={'today'}
              title={'Günlük Grafikleriniz'}
              onPressCard={() => navigation.navigate('dailyChart')}
            />
          </View>
          <View style={styles.chartTypeCardView}>
            <ChartTypeCard
              type={'week'}
              title={'Haftalık Grafikleriniz'}
              onPressCard={() => navigation.navigate('weeklyChart')}
            />
          </View>
          <View style={styles.chartTypeCardView}>
            <ChartTypeCard
              type={'month'}
              title={'Aylık Grafikleriniz'}
              onPressCard={() => navigation.navigate('monthlyChart')}
            />
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
