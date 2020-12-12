import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Layout from '../../../components/layout/Layout';
import styles from './styles/Styles';
import { SocialGirl } from '../../../components/icons';
import Circles from '../../../components/circles/Circles';
import Button from '../../../components/button/Button';

const Login = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [fetchingLogin, setfetchingLogin] = useState(false);

  const loginValidation = () => {
    setfetchingLogin(true);
    let errorMessage;
    if (!email || email.length < 5 || !email.includes('@')) errorMessage = 'Lütfen geçerli bir email adresi giriniz.';
    else if (!password || password.length < 4) errorMessage = 'Lütfen şifrenizi doğru giriniz.';
    return errorMessage
      ? Alert.alert('Lütfen Dikkat!', errorMessage, [{ text: 'Tamam', onPress: () => setfetchingLogin(false) }], {
          cancelable: false,
        })
      : login();
  };

  const login = () => {
    console.log('login');
    setfetchingLogin(false);
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
              placeholder={'Şifrenizi Giriniz'}
              style={styles.textInputStyle}
              value={password}
              onChangeText={setpassword}
              secureTextEntry={true}
              keyboardType={'visible-password'}
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
