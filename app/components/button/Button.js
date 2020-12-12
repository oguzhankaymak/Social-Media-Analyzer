import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles/Styles';
import { GlobalStyles, Colors } from '../../theme';

const Button = ({ title, fetching, disabled, onPressBtn, colorName }) => {
  const colorCode = () => {
    let color;
    if (colorName === 'save') color = Colors.vividCyanLimeGreen;
    else if (colorName === 'logout') color = Colors.vividPink;
    else color = Colors.moderateCyan;
    return color;
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, { backgroundColor: colorCode() }]}
      onPress={onPressBtn}>
      {fetching ? (
        <View style={GlobalStyles.center}>
          <ActivityIndicator size={'small'} color={Colors.white} />
        </View>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
