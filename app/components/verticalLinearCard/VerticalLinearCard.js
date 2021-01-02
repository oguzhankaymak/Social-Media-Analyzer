import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles/Styles';
import { ArrowRightIcon } from '../icons';
import { LinearGradient } from 'expo-linear-gradient';

const VerticalLinearCard = ({ onPressCard, linearColor, headerTitle, children }) => {
  return (
    <View>
      <LinearGradient colors={linearColor} style={styles.card}>
        <TouchableOpacity style={styles.header} onPress={onPressCard}>
          <Text style={styles.title}>{headerTitle}</Text>
          <ArrowRightIcon stroke={'white'} />
        </TouchableOpacity>
        <View style={styles.line} />
        <View style={styles.container}>{children}</View>
      </LinearGradient>
    </View>
  );
};

export default VerticalLinearCard;
