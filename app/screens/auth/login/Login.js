import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Layout from '../../../components/layout/Layout';
import styles from './styles/Styles';
import { SocialGirl } from '../../../components/icons';
import Circles from '../../../components/circles/Circles';
import Button from '../../../components/button/Button';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
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
            <Button title={'Giriş Yap'} />
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.registerTextRegular}>Hesabınız yok mu ?</Text>
          <Text style={styles.registerTextBold}> Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Login;
