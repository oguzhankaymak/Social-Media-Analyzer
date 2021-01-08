import React from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles/InstagramOperationStyle';
import { InstagramOperationMock } from '../../../mock';

const InstagramOperation = () => {
  const _renderAccountInfo = () => (
    <View style={styles.accountInfoCard}>
      <TouchableOpacity style={styles.accountInfoDetailCard}>
        <Text style={styles.counterText}>{InstagramOperationMock.post_count}</Text>
        <Text style={styles.counterTitleText}>Gönderi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountInfoDetailCard}>
        <Text style={styles.counterText}>{InstagramOperationMock.followers_count}</Text>
        <Text style={styles.counterTitleText}>Takipçi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountInfoDetailCard}>
        <Text style={styles.counterText}>{InstagramOperationMock.following_count}</Text>
        <Text style={styles.counterTitleText}>Takip Edilen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountInfoDetailCard}>
        <Text style={styles.counterText}>{InstagramOperationMock.notToBeFollowerd.length}</Text>
        <Text style={styles.counterTitleText}>Takip Etmeyen</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/img/oval.jpg')} style={styles.headerImage}>
        <View style={styles.profile}>
          <Image source={require('../../../assets/img/avatar.png')} style={styles.image} />
        </View>
      </ImageBackground>
      <View style={styles.headerTexts}>
        <View style={styles.accountTexts}>
          <Text style={styles.nameSurnameText}>{InstagramOperationMock.full_name}</Text>
          <Text style={styles.usernameText}>{InstagramOperationMock.username}</Text>
          <Text style={styles.bioText}>{InstagramOperationMock.bio}</Text>
        </View>
      </View>
      {_renderAccountInfo()}
    </View>
  );
};

export default InstagramOperation;
