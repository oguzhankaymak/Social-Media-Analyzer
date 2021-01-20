import React, { useState } from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles/InstagramOperationStyle';
import { CommentIcon, DoubleRightIcon, HeartIcon, InfoIcon } from '../../../components/icons';
import InstagramOperationModal from '../../../components/instagramOperationModal/InstagramOperationModal';
import { Colors } from '../../../theme';
import { request } from '../../../utils/Request';
import { generalErrorMessage } from '../../../utils/Functions';

const PrivateInstagramOperation = ({ route, navigation }) => {
  const [userInfo, setUserInfo] = useState(route?.params?.userInfo);
  const [params, setparams] = useState({ username: route?.params?.username, password: route?.params?.password });
  const [operationModalName, setoperationModalName] = useState('');
  const [count, setcount] = useState(0);
  const [followers, setfollowers] = useState(null);
  const [followersLoading, setfollowersLoading] = useState(false);
  const [followings, setfollowings] = useState(null);
  const [followingsLoading, setfollowingsLoading] = useState(false);
  const [notFollowedUsers, setnotFollowedUsers] = useState(null);
  const [notFollowedLoading, setNotFollowedLoading] = useState(false);

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

  const getFollowers = async () => {
    if (followers) {
      return navigation.navigate('followers', { followers: followers });
    }
    try {
      setfollowersLoading(true);
      const response = await request.post('/api/instagram/followers', params);
      if (response?.status === 200 && response?.data) {
        setfollowersLoading(false);
        if (response?.data?.success) {
          setfollowers(response?.data?.data[0]);
          return navigation.navigate('followers', { followers: response?.data?.data[0] });
        }
        return generalErrorMessage();
      }
      setfollowersLoading(false);
      return generalErrorMessage();
    } catch (error) {
      setfollowersLoading(false);
      return generalErrorMessage();
    }
  };

  const getFollowings = async () => {
    if (followings) {
      return navigation.navigate('following', { followings: followings });
    }
    try {
      setfollowingsLoading(true);
      const response = await request.post('/api/instagram/followings', params);
      if (response?.status === 200 && response?.data) {
        setfollowingsLoading(false);
        if (response?.data?.success) {
          setfollowings(response?.data?.data[0]);
          return navigation.navigate('following', { followings: response?.data?.data[0] });
        }
        return generalErrorMessage();
      }
      setfollowingsLoading(false);
      return generalErrorMessage();
    } catch (error) {
      setfollowingsLoading(false);
      return generalErrorMessage();
    }
  };

  const getNotFollowedUser = async () => {
    if (notFollowedUsers) {
      return navigation.navigate('notToBeFollowed', { notToBeFollowedUsers: notFollowedUsers });
    }
    try {
      setNotFollowedLoading(true);
      const response = await request.post('/api/instagram/not-followed-users', params);
      if (response?.status === 200 && response?.data) {
        setNotFollowedLoading(false);
        if (response?.data?.success) {
          setnotFollowedUsers(response?.data?.data);
          return navigation.navigate('notToBeFollowed', { notToBeFollowedUsers: response?.data?.data });
        }
        return generalErrorMessage();
      }
      setNotFollowedLoading(false);
      return generalErrorMessage();
    } catch (error) {
      setNotFollowedLoading(false);
      return generalErrorMessage();
    }
  };

  const _renderAccountInfo = () => (
    <View style={styles.accountInfoCard}>
      {<Info title={'Gönderi'} value={userInfo?.userInfo?.media_count} onPress={onPressPosts} />}
      {
        <Info
          title={'Takipçi'}
          value={userInfo?.userInfo?.follower_count}
          loading={followersLoading}
          onPress={getFollowers}
        />
      }
      {
        <Info
          title={'Takip Edilen'}
          value={userInfo?.userInfo?.following_count}
          loading={followingsLoading}
          onPress={getFollowings}
        />
      }
      {<Info title={'Takip Etmeyen'} value={null} loading={notFollowedLoading} onPress={getNotFollowedUser} />}
    </View>
  );

  const Info = ({ title, value, onPress, loading }) => (
    <TouchableOpacity
      style={styles.accountInfoDetailCard}
      onPress={onPress}
      disabled={followersLoading || followingsLoading || notFollowedLoading}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.black} />
      ) : value === null ? (
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
      <TouchableOpacity
        style={styles.socialInfoLikeCard}
        activeOpacity={100}
        onPress={onPressLikes}
        disabled={followersLoading || followingsLoading || notFollowedLoading}>
        <Text style={styles.socialInfoText}>{userInfo?.totalLikeCount}</Text>
        <View style={styles.socialInfoIconCard}>
          <View style={styles.socialInfoIconView}>
            <HeartIcon color={'white'} width={styles.icon.width} height={styles.icon.height} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.socialInfoCommentCard}
        activeOpacity={100}
        onPress={onPressComments}
        disabled={followersLoading || followingsLoading || notFollowedLoading}>
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
