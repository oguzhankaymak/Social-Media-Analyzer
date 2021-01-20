import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { CommentIcon, HeartIcon } from '../../../components/icons';
import InstagramOperationModal from '../../../components/instagramOperationModal/InstagramOperationModal';

import styles from './styles/InstagramOperationStyle';

const PublicInstagramOperation = ({ route }) => {
  const [userInfo, setUserInfo] = useState(route?.params?.userInfo);
  const [operationModalName, setoperationModalName] = useState('');

  const onPressLikes = () => {
    setoperationModalName('likes');
  };

  const onPressComments = () => {
    setoperationModalName('comments');
  };

  const _renderAccountInfo = () => (
    <View style={styles.accountInfoCard}>
      {<Info title={'Gönderi'} value={userInfo?.postCount} />}
      {<Info title={'Takipçi'} value={userInfo?.follower_count} />}
      {<Info title={'Takip Edilen'} value={userInfo?.following_count} />}
    </View>
  );

  const Info = ({ title, value }) => (
    <View style={styles.accountInfoDetailCard}>
      <Text style={styles.counterText}>{value}</Text>
      <Text style={styles.counterTitleText}>{title}</Text>
    </View>
  );

  const _renderHeader = () => (
    <View style={styles.headerTexts}>
      <View style={styles.accountTexts}>
        <Text style={styles.nameSurnameText}>{userInfo?.full_name}</Text>
        <Text style={styles.usernameText}>{userInfo?.username}</Text>
        <Text style={styles.bioText}>{userInfo?.biography}</Text>
      </View>
    </View>
  );

  const _renderBody = () => (
    <View style={styles.socialInfoCards}>
      <TouchableOpacity style={styles.socialInfoLikeCard} activeOpacity={100} onPress={onPressLikes}>
        <Text style={styles.socialInfoText}>Beğeni</Text>
        <View style={styles.socialInfoIconCard}>
          <View style={styles.socialInfoIconView}>
            <HeartIcon color={'white'} width={styles.icon.width} height={styles.icon.height} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialInfoCommentCard} activeOpacity={100} onPress={onPressComments}>
        <Text style={styles.socialInfoText}>Yorum</Text>
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
      <InstagramOperationModal
        modalVisible={operationModalName?.length > 0}
        modalName={operationModalName}
        count={null}
        close={() => setoperationModalName('')}
      />
      <ImageBackground source={require('../../../assets/img/oval.jpg')} style={styles.headerImage}>
        <View style={styles.profile}>
          <Image
            source={{
              uri: userInfo?.photo,
            }}
            style={styles.image}
          />
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

export default PublicInstagramOperation;
