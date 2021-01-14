import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';

import Layout from '../../../components/layout/Layout';
import styles from './styles/Styles';
import { SocialGirl } from '../../../components/icons';
import Circles from '../../../components/circles/Circles';
import Button from '../../../components/button/Button';
import request from '../../../utils/Request';
import UserActions from '../../../redux/UserItemRedux';
import { emailIsValid } from '../../../utils/Functions';
import { Fonts } from '../../../theme';

const Login = ({ navigation }) => {
  const passwordElementRef = useRef(null);
  const dispatch = useDispatch();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [fetchingLogin, setfetchingLogin] = useState(false);

  useEffect(() => {
    passwordElementRef.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });
  }, []);

  const loginValidation = () => {
    setfetchingLogin(true);
    let errorMessage;
    if (!email || !emailIsValid(email)) errorMessage = 'Lütfen geçerli bir email adresi giriniz.';
    else if (!password || password.length < 4) errorMessage = 'Lütfen şifrenizi doğru giriniz.';
    return errorMessage
      ? Alert.alert('Lütfen Dikkat!', errorMessage, [{ text: 'Tamam', onPress: () => setfetchingLogin(false) }], {
          cancelable: false,
        })
      : login();
  };

  const login = async () => {
    try {
      const response = await request.post('/account/login', { email: email, password: password });

      if (response?.status === 200 && response?.data) {
        dispatch(UserActions.setUser(response?.data));
        setfetchingLogin(false);
      }
    } catch (error) {
      console.log('hata', error.response);
      setfetchingLogin(false);
      return Alert.alert(
        'Maalesef İşleminiz Gerçekleştirilemedi!',
        'Email adresiniz veya şifreniz yanlış.',
        [{ text: 'Tamam', onPress: () => {} }],
        {
          cancelable: false,
        },
      );
    }
  };

  return (
    <Layout>
      <View style={styles.form}>
        <KeyboardAwareScrollView enableOnAndroid={true} bounces={false}>
          <Circles />
          <View style={styles.header}>
            <Text style={styles.title}>Tekrar Hoşgeldiniz !</Text>
          </View>
          <View style={styles.socialGirlIconView}>
            <SocialGirl width={styles.socialGirlIcon.width} height={styles.socialGirlIcon.height} />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              placeholder={'Email Adresinizi Giriniz'}
              style={styles.textInputStyle}
              value={email}
              onChangeText={setemail}
              keyboardType={'visible-password'}
            />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              ref={passwordElementRef}
              placeholder={'Şifrenizi Giriniz'}
              style={styles.textInputStyle}
              value={password}
              onChangeText={setpassword}
              secureTextEntry={true}
              autoCompleteType={'password'}
            />
          </View>
          <View style={styles.loginButton}>
            <Button
              title={'Giriş Yap'}
              onPressBtn={loginValidation}
              fetching={fetchingLogin}
              disabled={fetchingLogin}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => navigation.goBack()}>
        <Text style={styles.loginTextRegular}>Hesabınız yok mu ?</Text>
        <Text style={styles.loginTextBold}> Kayıt Ol</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default Login;
