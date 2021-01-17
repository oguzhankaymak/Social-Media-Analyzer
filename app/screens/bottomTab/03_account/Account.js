import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles/Styles';
import Layout from '../../../components/layout/Layout';
import { EditIcon, CloseIcon } from '../../../components/icons';
import Button from '../../../components/button/Button';
import { Fonts, GlobalStyles } from '../../../theme';
import { request } from '../../../utils/Request';
import UserActions from '../../../redux/UserItemRedux';
import { emailIsValid, generalErrorMessage } from '../../../utils/Functions';
import Messages from '../../../utils/Messages';

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userItem);

  const [editable, seteditable] = useState(false);
  const [initialState, setinitialState] = useState({ firstname: '', surname: '', email: '', profilePhoto: '' });
  const [nameSurname, setnameSurname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [fetchingScreen, setfetchingScreen] = useState(false);
  const [fetchingUpdate, setfetchingUpdate] = useState(false);
  const [fetchingLogout, setfetchingLogout] = useState(false);

  const inputElementRef = useRef(null);

  useEffect(() => {
    if (user?.token) {
      getUserInfo();
    }

    inputElementRef.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });
  }, []);

  const updateValidation = () => {
    let errorMessage;
    if (initialState?.firstname + ' ' + initialState?.surname === nameSurname && initialState?.email === email)
      errorMessage = Messages.noChanges;
    else if (!nameSurname || nameSurname.length < 4 || !nameSurname.includes(' '))
      errorMessage = Messages.invalidNameSurname;
    else if (!email || !emailIsValid(email)) errorMessage = Messages.invalidEmail;
    else if (!password || password.length < 4) errorMessage = Messages.invalidPassword;
    return errorMessage
      ? Alert.alert(Messages.pleaseAttention, errorMessage, [{ text: Messages.okay, onPress: () => {} }], {
          cancelable: false,
        })
      : update();
  };

  const update = async () => {
    try {
      setfetchingUpdate(true);
      let nameSurnameArray = nameSurname?.split(' ');
      const response = await request.post('/api/personal-info/edit', {
        firstname: nameSurnameArray[0],
        surname: nameSurnameArray[1],
        email: email,
        password: password,
      });

      if (response.status === 200 && response?.data) {
        setfetchingUpdate(false);
        setpassword('');
        if (response?.data?.success) {
          await getUserInfo(true);
          seteditable(false);
          return Alert.alert(
            Messages.success,
            Messages.successfullyChanged,
            [{ text: Messages.okay, onPress: () => {} }],
            {
              cancelable: false,
            },
          );
        } else if (response?.data?.message?.length) {
          return Alert.alert(
            Messages.generalErrorTitle,
            response?.data?.message,
            [
              {
                text: Messages.okay,
                onPress: () => {},
              },
            ],
            {
              cancelable: false,
            },
          );
        }
        return generalErrorMessage();
      }
      setpassword('');
      setfetchingUpdate(false);
      return generalErrorMessage();
    } catch (error) {
      setpassword('');
      setfetchingUpdate(false);
      return generalErrorMessage();
    }
  };

  const getUserInfo = async (userUpdate = false) => {
    try {
      setfetchingScreen(true);
      const response = await request.get('/api/personal-info/');
      if (response.status === 200 && response?.data) {
        if (response?.data?.success) {
          let userInfo = response?.data?.userInfo;
          setinitialState(userInfo);
          setnameSurname(userInfo?.firstname + ' ' + userInfo?.surname);
          if (userUpdate) {
            dispatch(UserActions.setUser({ firstname: userInfo?.firstname, surname: userInfo?.surname }));
          }
          setfetchingScreen(false);
          return setemail(response?.data?.userInfo?.email);
        }
        setfetchingScreen(false);
        return generalErrorMessage();
      }
      setfetchingScreen(false);
      generalErrorMessage();
      return setfetchingScreen(false);
    } catch (error) {
      generalErrorMessage();
      return setfetchingScreen(false);
    }
  };

  const logout = () => {
    try {
      setfetchingLogout(true);
      dispatch(UserActions.resetUser());
      dispatch(UserActions.resetToken());
      setfetchingLogout(false);
    } catch (error) {
      setfetchingLogout(false);
      generalErrorMessage();
    }
  };

  if (fetchingScreen) {
    return (
      <Layout>
        <View style={GlobalStyles.fCenter}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      </Layout>
    );
  }

  return (
    <Layout>
      <View style={styles.header}>
        <View style={styles.icons}>
          {editable ? (
            <TouchableOpacity onPress={() => seteditable(false)} disabled={fetchingUpdate}>
              <CloseIcon width={24} height={24} color={'white'} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => seteditable(true)} disabled={fetchingUpdate}>
              <EditIcon width={24} height={24} color={'white'} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.profile}>
          <Image source={require('../../../assets/img/avatar.png')} style={styles.image} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Hoşgeldin {initialState?.firstname + ' ' + initialState?.surname}</Text>
        </View>
      </View>
      <View style={styles.form}>
        <KeyboardAwareScrollView enableOnAndroid={true} bounces={false}>
          <View style={styles.inputStyles}>
            <TextInput
              placeholder={'Adınızı ve Soyadınızı Giriniz'}
              style={styles.textInputStyle}
              value={nameSurname}
              onChangeText={setnameSurname}
              keyboardType={'visible-password'}
              editable={editable}
            />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              placeholder={'Email Adresinizi Giriniz'}
              style={styles.textInputStyle}
              value={email}
              onChangeText={setemail}
              keyboardType={'visible-password'}
              editable={editable}
            />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              ref={inputElementRef}
              placeholder={'Şifrenizi Giriniz'}
              style={styles.textInputStyle}
              value={password}
              onChangeText={setpassword}
              autoCompleteType={'password'}
              secureTextEntry={true}
              editable={editable}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={styles.footer}>
        {editable ? (
          <Button
            title={'Kaydet'}
            colorName={'save'}
            fetching={fetchingUpdate}
            disabled={fetchingUpdate}
            onPressBtn={updateValidation}
          />
        ) : (
          <Button
            title={'Çıkış Yap'}
            colorName={'logout'}
            fetching={fetchingLogout}
            disabled={fetchingLogout}
            onPressBtn={logout}
          />
        )}
      </View>
    </Layout>
  );
};

export default Account;
