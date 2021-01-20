import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles/Styles';

const SquareImageCard = ({ image, title, description }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

export default SquareImageCard;
