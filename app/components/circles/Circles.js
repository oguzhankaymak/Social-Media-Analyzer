import React from 'react';
import { View } from 'react-native';
import styles from './styles/Styles';

const Circles = () => {
  return (
    <View>
      <View style={[styles.circle, styles.first]} />
      <View style={[styles.circle, styles.second]} />
    </View>
  );
};

export default Circles;
