import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles/FollowingStyle';
import UserList from '../../../components/userList/UserList';
import { CalendarIcon, SearchIcon } from '../../../components/icons';
import { Colors } from '../../../theme';

const Following = () => {
  const [username, setusername] = useState('');
  const [data, setdata] = useState([]);

  const onchangeUsername = (text) => {
    setusername(text.trim());
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TouchableOpacity style={styles.calendarIconView}>
          <CalendarIcon width={styles.icon.width} height={styles.icon.height} color={Colors.white} />
        </TouchableOpacity>
        <View style={styles.searchInputView}>
          <SearchIcon width={styles.searchIcon.width} height={styles.searchIcon.height} color={Colors.black} />
          <TextInput
            style={styles.textInput}
            value={username}
            onChangeText={onchangeUsername}
            placeholder={'Kullanıcı Adı'}
            maxLength={10}
            keyboardType={'default'}
            returnKeyType={'search'}
            onSubmitEditing={() => console.log(username)}
          />
        </View>
      </View>
      <View style={styles.listView}>
        <UserList data={data} />
      </View>
    </View>
  );
};

export default Following;
