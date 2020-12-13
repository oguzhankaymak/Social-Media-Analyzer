import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles/Style';
import { BoardListIcon, InstagramIcon, PieChartIcon, WriteIcon } from '../icons';
import { Colors } from '../../theme';

const RoundCard = ({ name, title, onPressCard }) => {
  const _renderIcon = () => {
    if (name === 'instagram') {
      return <InstagramIcon color={textColor()} width={styles.icon.width} height={styles.icon.height} />;
    } else if (name === 'advice') {
      return <BoardListIcon color={textColor()} width={styles.icon.width} height={styles.icon.height} />;
    } else if (name === 'charts') {
      return <PieChartIcon color={textColor()} width={styles.icon.width} height={styles.icon.height} />;
    } else if (name === 'contact') {
      return <WriteIcon color={textColor()} width={styles.icon.width} height={styles.icon.height} />;
    }
  };

  const cardColor = () => {
    if (name === 'instagram') {
      return Colors.red;
    } else if (name === 'advice') {
      return Colors.mediumSoftCyan;
    } else if (name === 'charts') {
      return Colors.softOrange;
    } else if (name === 'contact') {
      return Colors.moderateMagenta;
    }
  };

  const textColor = () => {
    return 'white';
  };
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: cardColor() }]} onPress={onPressCard}>
      {_renderIcon()}
      <Text style={[styles.title, { color: textColor() }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundCard;
