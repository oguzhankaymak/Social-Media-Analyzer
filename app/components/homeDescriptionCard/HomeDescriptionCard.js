import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles/Styles';
import { ChartSquareBarIcon, BoardListIcon, InfoIcon, KeyIcon, UserIcon, PieChartIcon } from '../icons';

const HomeDescriptionCard = ({ title, description, cardName }) => {
  const _renderIcon = () => {
    if (cardName === 'hint-stats') {
      return (
        <PieChartIcon
          width={styles.chartSquareBarIcon.width}
          height={styles.chartSquareBarIcon.height}
          color={styles.chartSquareBarIcon.color}
        />
      );
    } else if (cardName === 'hint-suggestions') {
      return (
        <BoardListIcon
          width={styles.chartSquareBarIcon.width}
          height={styles.chartSquareBarIcon.height}
          color={styles.chartSquareBarIcon.color}
        />
      );
    } else if (cardName === 'hint-public-accounts') {
      return (
        <InfoIcon
          width={styles.chartSquareBarIcon.width}
          height={styles.chartSquareBarIcon.height}
          color={styles.chartSquareBarIcon.color}
        />
      );
    } else if (cardName === 'hint-private-accounts') {
      return (
        <KeyIcon
          width={styles.chartSquareBarIcon.width}
          height={styles.chartSquareBarIcon.height}
          color={styles.chartSquareBarIcon.color}
        />
      );
    } else if (cardName === 'hint-my-account') {
      return (
        <UserIcon
          width={styles.chartSquareBarIcon.width}
          height={styles.chartSquareBarIcon.height}
          color={styles.chartSquareBarIcon.color}
        />
      );
    } else if (cardName === 'hint-analysis') {
      return (
        <ChartSquareBarIcon
          width={styles.chartSquareBarIcon.width}
          height={styles.chartSquareBarIcon.height}
          color={styles.chartSquareBarIcon.color}
        />
      );
    }
    return (
      <InfoIcon
        width={styles.chartSquareBarIcon.width}
        height={styles.chartSquareBarIcon.height}
        color={styles.chartSquareBarIcon.color}
      />
    );
  };
  return (
    <View style={styles.card}>
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
