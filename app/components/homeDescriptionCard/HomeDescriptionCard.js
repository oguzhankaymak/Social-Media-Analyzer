import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles/Styles';
import { Colors } from '../../theme';
import { ChartSquareBarIcon } from '../icons';
const HomeDescriptionCard = ({ title, description, cardName }) => {
  const backgroundColor = () => {
    if (cardName === 'statistics') {
      return Colors.brightCyan;
    }
  };

  const _renderIcon = () => {
    if (cardName === 'statistics') {
      return (
        <ChartSquareBarIcon
          width={styles.chartSquareBarIcon.width}
          height={styles.chartSquareBarIcon.height}
          color={styles.chartSquareBarIcon.color}
        />
      );
    }
  };
  return (
    <View style={[styles.card, { backgroundColor: backgroundColor() }]}>
      <View style={styles.container}>
        <View style={styles.round}>{_renderIcon()}</View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.infoText}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeDescriptionCard;
