import React from 'react';
import { View, Text } from 'react-native';

import { InfoIcon } from '../icons';
import styles from './styles/Styles';

const ChartInfoCard = () => {
  return (
    <View style={styles.card}>
      <InfoIcon width={24} height={24} stroke={'white'} />
      <Text style={styles.title}>Gerçekleştirdiğiniz sorgu sayısı kadar bilgi bulunmaktadır</Text>
    </View>
  );
};

export default ChartInfoCard;
