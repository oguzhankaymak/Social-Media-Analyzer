import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles/Styles';
import Layout from '../../../components/layout/Layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Circles from '../../../components/circles/Circles';
import Button from '../../../components/button/Button';

const Register = ({ navigation }) => {
  const [nameSurname, setnameSurname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordConfrim, setpasswordConfrim] = useState('');

  return (
    <Layout>
      <View style={styles.form}>
        <KeyboardAwareScrollView enableOnAndroid={true} bounces={false}>
          <Circles />
          <View style={styles.header}>
            <Text style={styles.title}>Sosyal Medya Analizcisine</Text>
            <Text style={styles.title}>Hoşgeldiniz</Text>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>Hizmetlerimizden ücretsiz bir şekilde </Text>
              <Text style={styles.infoText}>faydalanmak için hesap oluşturmanız</Text>
              <Text style={styles.infoText}>gerekmektedir.</Text>
            </View>
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              placeholder={'Adınızı ve Soyadınızı Giriniz'}
              style={styles.textInputStyle}
              value={nameSurname}
              onChangeText={setnameSurname}
              keyboardType={'visible-password'}
            />
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
          <View style={styles.inputStyles}>
            <TextInput
              placeholder={'Şifrenizi Doğrulayınız'}
              style={styles.textInputStyle}
              value={passwordConfrim}
              onChangeText={setpasswordConfrim}
              secureTextEntry={true}
              keyboardType={'visible-password'}
            />
          </View>
          <View style={styles.registerButton}>
            <Button title={'Kayıt Ol'} onPressBtn={() => console.log('register')} />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => navigation.goBack()}>
        <Text style={styles.registerTextRegular}>Hesabınız var mı ?</Text>
        <Text style={styles.registerTextBold}> Giriş Yap</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default Register;
