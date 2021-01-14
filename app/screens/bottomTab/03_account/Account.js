import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';

import styles from './styles/Styles';
import Layout from '../../../components/layout/Layout';
import { EditIcon, CloseIcon } from '../../../components/icons';
import Button from '../../../components/button/Button';
import { Fonts } from '../../../theme';
import UserActions from '../../../redux/UserItemRedux';

const Account = () => {
  const dispatch = useDispatch();

  const initialState = {
    nameSurname: 'Oğuzhan Kaymak',
    email: 'oguzhankaymakdev@gmail.com',
    password: '123456789',
  };
  const [editable, seteditable] = useState(false);
  const [nameSurname, setnameSurname] = useState(initialState.nameSurname);
  const [email, setemail] = useState(initialState.email);
  const [password, setpassword] = useState(initialState.password);
  const [fetching, setFetching] = useState(false);

  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });
  }, []);

  const updateValidation = () => {
    setFetching(true);
    let errorMessage;
    if (initialState.nameSurname === nameSurname && initialState.email === email)
      errorMessage = 'Değişiklik gerçekleştirmediniz';
    else if (!nameSurname || nameSurname.length < 4) errorMessage = 'Lütfen geçerli ad soyad giriniz';
    else if (!email || email.length < 5 || !email.includes('@'))
      errorMessage = 'Lütfen geçerli bir email adresi giriniz.';
    else if (!password || password.length < 4) errorMessage = 'Lütfen şifrenizi doğru giriniz.';
    return errorMessage
      ? Alert.alert('Lütfen Dikkat!', errorMessage, [{ text: 'Tamam', onPress: () => setFetching(false) }], {
          cancelable: false,
        })
      : update();
  };

  const update = () => {
    seteditable(false);
    setTimeout(() => {
      console.log('update');
      setFetching(false);
    }, 5000);
  };

  const logout = () => {
    try {
      setFetching(true);
      dispatch(UserActions.resetUser());
      setFetching(false);
    } catch (error) {
      console.log(error, 'error on logout');
    }
  };
  return (
    <Layout>
      <View style={styles.header}>
        <View style={styles.icons}>
          {editable ? (
            <TouchableOpacity onPress={() => seteditable(false)} disabled={fetching}>
              <CloseIcon width={24} height={24} color={'white'} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => seteditable(true)} disabled={fetching}>
              <EditIcon width={24} height={24} color={'white'} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.profile}>
          <Image source={require('../../../assets/img/avatar.png')} style={styles.image} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Hoşgeldin Oğuzhan Kaymak</Text>
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
            fetching={fetching}
            disabled={fetching}
            onPressBtn={updateValidation}
          />
        ) : (
          <Button
            title={'Çıkış Yap'}
            colorName={'logout'}
            fetching={fetching}
            disabled={fetching}
            onPressBtn={logout}
          />
        )}
      </View>
    </Layout>
  );
};

export default Account;
