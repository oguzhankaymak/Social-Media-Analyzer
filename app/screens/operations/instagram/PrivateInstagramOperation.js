import React, { useState } from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles/InstagramOperationStyle';
import { InstagramOperationMock } from '../../../mock';
import { CommentIcon, HeartIcon, InfoIcon } from '../../../components/icons';
import InstagramOperationModal from '../../../components/instagramOperationModal/InstagramOperationModal';

const PrivateInstagramOperation = ({ navigation }) => {
  const [operationModalName, setoperationModalName] = useState('');
  const [count, setcount] = useState(0);

  const onPressPosts = () => {
    setcount(InstagramOperationMock.post_count);
    setoperationModalName('posts');
  };

  const onPressLikes = () => {
    setcount(InstagramOperationMock.total_likes);
    setoperationModalName('likes');
  };

  const onPressComments = () => {
    setcount(InstagramOperationMock.total_comments);
    setoperationModalName('comments');
  };

  const _renderAccountInfo = () => (
    <View style={styles.accountInfoCard}>
      {<Info title={'Gönderi'} value={InstagramOperationMock.post_count} onPress={onPressPosts} />}
      {
        <Info
          title={'Takipçi'}
          value={InstagramOperationMock.followers_count}
          onPress={() => navigation.navigate('followers')}
        />
      }
      {
        <Info
          title={'Takip Edilen'}
          value={InstagramOperationMock.following_count}
          onPress={() => navigation.navigate('following')}
        />
      }
      {
        <Info
          title={'Takip Etmeyen'}
          value={InstagramOperationMock.notToBeFollowerd.length}
          onPress={() => navigation.navigate('notToBeFollowed')}
        />
      }
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
      <TouchableOpacity style={styles.socialInfoLikeCard} activeOpacity={100} onPress={onPressLikes}>
        <Text style={styles.socialInfoText}>{InstagramOperationMock.total_likes}</Text>
        <View style={styles.socialInfoIconCard}>
          <View style={styles.socialInfoIconView}>
            <HeartIcon color={'white'} width={styles.icon.width} height={styles.icon.height} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialInfoCommentCard} activeOpacity={100} onPress={onPressComments}>
        <Text style={styles.socialInfoText}>{InstagramOperationMock.total_comments}</Text>
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
        count={count}
        close={() => setoperationModalName('')}
      />
      <ImageBackground source={require('../../../assets/img/oval.jpg')} style={styles.headerImage}>
        <View style={styles.profile}>
          <Image source={require('../../../assets/img/avatar.png')} style={styles.image} />
        </View>
      </ImageBackground>
      <View style={styles.header}>
        {_renderHeader()}
        {_renderAccountInfo()}
      </View>
      <View style={styles.infoView}>
        <InfoIcon width={styles.icon.width} height={styles.icon.height} color={'#8EA4B6'} />
        <Text style={styles.infoText}>İlgili sayılara tıklayarak detayları görebilirsiniz</Text>
      </View>
      <View style={styles.body}>{_renderBody()}</View>
    </View>
  );
};

export default PrivateInstagramOperation;
