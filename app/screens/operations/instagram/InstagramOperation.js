import React from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles/InstagramOperationStyle';
import { InstagramOperationMock } from '../../../mock';
import { CommentIcon, HeartIcon } from '../../../components/icons';

const InstagramOperation = () => {
  const _renderAccountInfo = () => (
    <View style={styles.accountInfoCard}>
      {<Info title={'Gönderi'} value={InstagramOperationMock.post_count} />}
      {<Info title={'Takipçi'} value={InstagramOperationMock.followers_count} />}
      {<Info title={'Takip Edilen'} value={InstagramOperationMock.following_count} />}
      {<Info title={'Takip Etmeyen'} value={InstagramOperationMock.notToBeFollowerd.length} />}
    </View>
  );

  const Info = ({ title, value, onPress }) => (
    <TouchableOpacity style={styles.accountInfoDetailCard} onPress={onPress}>
      <Text style={styles.counterText}>{value}</Text>
      <Text style={styles.counterTitleText}>{title}</Text>
    </TouchableOpacity>
  );

  const _renderHeader = () => (
    <View style={styles.headerTexts}>
      <View style={styles.accountTexts}>
        <Text style={styles.nameSurnameText}>{InstagramOperationMock.full_name}</Text>
        <Text style={styles.usernameText}>{InstagramOperationMock.username}</Text>
        <Text style={styles.bioText}>{InstagramOperationMock.bio}</Text>
      </View>
    </View>
  );

  const _renderBody = () => (
    <View style={styles.socialInfoCards}>
      <TouchableOpacity style={styles.socialInfoLikeCard} activeOpacity={100}>
        <Text style={styles.socialInfoText}>50</Text>
        <View style={styles.socialInfoIconCard}>
          <View style={styles.socialInfoIconView}>
            <HeartIcon color={'white'} width={styles.icon.width} height={styles.icon.height} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialInfoCommentCard} activeOpacity={100}>
        <Text style={styles.socialInfoText}>50</Text>
        <View style={styles.socialInfoIconCard}>
          <View style={styles.socialInfoIconView}>
            <CommentIcon color={'white'} width={styles.icon.width} height={styles.icon.height} />
          </View>
        </View>
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
      <View style={styles.header}>
        {_renderHeader()}
        {_renderAccountInfo()}
      </View>
      <View style={styles.body}>{_renderBody()}</View>
    </View>
  );
};

export default InstagramOperation;
