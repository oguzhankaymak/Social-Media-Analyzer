import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme';

import styles from './styles/RadioButtonStyle';

const RadioButton = ({ active, title, onpressRadioButton }) => {
  return (
    <TouchableOpacity style={styles.radioButton} disabled={active} onPress={onpressRadioButton}>
      <View style={styles.bigCircle}>{active && <View style={styles.smallCircle} />}</View>
      <Text style={[styles.title, active ? { color: Colors.softCyan } : { color: Colors.black }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
