import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/Styles';

const ChartCard = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Günlük Genel Durum</Text>
        <Text style={styles.value}>+8</Text>
      </View>
      <View style={styles.chart}>{children}</View>
    </View>
  );
};

export default ChartCard;
