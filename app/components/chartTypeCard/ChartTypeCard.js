import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../theme';

const ChartTypeCard = ({ type, title }) => {
  const gradientColor = () => {
    if (type === 'today') {
      return Colors.pureRedBrightRedLinearGradientColor;
    } else if (type === 'week') {
      return Colors.mediumStrongOrangeBrightCyan;
    } else if (type === 'month') {
      return Colors.brightYellowStrongMagenta;
    } else if (type === 'year') {
      return Colors.brightYellowMediumStrongOrange;
    }
  };

  const _renderIcon = () => {
    if (type === 'today') {
      return <Image style={styles.timeManagementImg} source={require('../../assets/img/timeManagement.png')} />;
    } else if (type === 'week') {
      return <Image style={styles.calendarImg} source={require('../../assets/img/calendar.png')} />;
    } else if (type === 'month') {
      return <Image style={styles.pieManImg} source={require('../../assets/img/pieMan.png')} />;
    } else if (type === 'year') {
      return <Image style={styles.statisticsImg} source={require('../../assets/img/statistics.png')} />;
    }
  };

  return (
    <TouchableOpacity>
      <LinearGradient
        colors={gradientColor()}
        start={{ x: 2, y: 0.3 }}
        end={{ x: 0.3, y: 0.5 }}
        locations={[0.1, 0.9]}
        style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          {_renderIcon()}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ChartTypeCard;
