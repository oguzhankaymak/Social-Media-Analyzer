import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from './styles/FollowingStyle';
import UserList from '../../../components/userList/UserList';
import { CalendarIcon, SearchIcon } from '../../../components/icons';
import { Colors } from '../../../theme';

const Following = ({ route }) => {
  const [username, setusername] = useState('');
  const [data, setdata] = useState(route?.params?.followings);
  const [filterData, setFilterData] = useState(route?.params?.followings);

  const searchFilter = (text) => {
    let newData = data.filter((item) => {
      let listItem = `${item.username?.toLowerCase()} ${item.full_name?.toLowerCase()}`;
      return listItem.indexOf(text?.toLowerCase()) > -1;
    });
    setusername(text);
    setFilterData(newData?.length ? newData : null);
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
            onChangeText={searchFilter}
            placeholder={'Kullanıcı Adı / Ad Soyad'}
            maxLength={10}
            keyboardType={'default'}
          />
        </View>
      </View>
      <View style={styles.listView}>
        {filterData && filterData?.length ? (
          <View>
            <UserList data={filterData} />
          </View>
        ) : (
          <Text>Kullanıcı Bulunamadı!</Text>
        )}
      </View>
    </View>
  );
};

export default Following;
