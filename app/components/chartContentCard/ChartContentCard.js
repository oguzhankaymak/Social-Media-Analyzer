import React from 'react';
import { View, Text } from 'react-native';

import { DocumentReportIcon } from '../icons';
import styles from './styles/Styles';

const ChartContentCard = ({ datetime, data }) => {
  return (
    <View style={styles.card}>
      <DocumentReportIcon width={24} height={24} stroke={'black'} color={'black'} />
      <View style={styles.content}>
        <Text style={styles.count}>{data}</Text>
        <Text style={styles.date}>{datetime}</Text>
      </View>
    </View>
  );
};

export default ChartContentCard;
