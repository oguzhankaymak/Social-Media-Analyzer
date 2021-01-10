import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles/Style';

const UserList = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.flatlistCard}>
        <Image
          style={styles.profileImage}
          source={{
            uri: item.profile_pic_url,
          }}
        />
        <View>
          <Text style={styles.nameSurnameText}>{item.full_name}</Text>
          <Text style={styles.usernameText}>{item.username}</Text>
        </View>
      </View>
    );
  };

  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => String(index)} />;
};

export default UserList;
