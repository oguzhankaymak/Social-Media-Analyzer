import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles/Styles';
import { GlobalStyles, Colors } from '../../theme';

const Button = ({ title, fetching, onPressBtn }) => {
  return (
    <TouchableOpacity disabled={fetching} style={styles.button} onPress={onPressBtn}>
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
