import React, { useState } from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles/InstagramOperationStyle';
import { CommentIcon, DoubleRightIcon, HeartIcon, InfoIcon } from '../../../components/icons';
import InstagramOperationModal from '../../../components/instagramOperationModal/InstagramOperationModal';
import { Colors } from '../../../theme';

const PrivateInstagramOperation = ({ route, navigation }) => {
  const [userInfo, setUserInfo] = useState(route?.params?.userInfo);
  const [operationModalName, setoperationModalName] = useState('');
  const [count, setcount] = useState(0);

  const onPressPosts = () => {
    setcount(userInfo?.userInfo?.media_count);
    setoperationModalName('posts');
  };

  const onPressLikes = () => {
    setcount(userInfo?.totalLikeCount);
    setoperationModalName('likes');
  };

  const onPressComments = () => {
    setcount(userInfo?.totalCommentCount);
    setoperationModalName('comments');
  };

  const _renderAccountInfo = () => (
    <View style={styles.accountInfoCard}>
      {<Info title={'Gönderi'} value={userInfo?.userInfo?.media_count} onPress={onPressPosts} />}
      {
        <Info
          title={'Takipçi'}
          value={userInfo?.userInfo?.follower_count}
          onPress={() => navigation.navigate('followers')}
        />
      }
      {
        <Info
          title={'Takip Edilen'}
          value={userInfo?.userInfo?.following_count}
          onPress={() => navigation.navigate('following')}
        />
      }
      {<Info title={'Takip Etmeyen'} value={null} onPress={() => navigation.navigate('notToBeFollowed')} />}
    </View>
  );

  const Info = ({ title, value, onPress }) => (
    <TouchableOpacity style={styles.accountInfoDetailCard} onPress={onPress}>
      {value === null ? (
        <DoubleRightIcon width={22} height={22} color={Colors.black} />
      ) : (
        <Text style={styles.counterText}>{value}</Text>
      )}
      <Text style={styles.counterTitleText}>{title}</Text>
    </TouchableOpacity>
  );

  const _renderHeader = () => (
    <View style={styles.headerTexts}>
      <View style={styles.accountTexts}>
        <Text style={styles.nameSurnameText}>{userInfo?.userInfo?.full_name}</Text>
        <Text style={styles.usernameText}>{userInfo?.userInfo?.username}</Text>
        <Text style={styles.bioText}>{userInfo?.userInfo?.biography}</Text>
      </View>
    </View>
  );

  const _renderBody = () => (
    <View style={styles.socialInfoCards}>
      <TouchableOpacity style={styles.socialInfoLikeCard} activeOpacity={100} onPress={onPressLikes}>
        <Text style={styles.socialInfoText}>{userInfo?.totalLikeCount}</Text>
        <View style={styles.socialInfoIconCard}>
          <View style={styles.socialInfoIconView}>
            <HeartIcon color={'white'} width={styles.icon.width} height={styles.icon.height} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialInfoCommentCard} activeOpacity={100} onPress={onPressComments}>
        <Text style={styles.socialInfoText}>{userInfo?.totalCommentCount}</Text>
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
          <Image
            source={{
              uri: userInfo?.userInfo?.profile_pic_url,
            }}
            style={styles.image}
          />
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
