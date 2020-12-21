import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './styles/Styles';
import Layout from '../../../components/layout/Layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Circles from '../../../components/circles/Circles';
import Button from '../../../components/button/Button';
import { Fonts } from '../../../theme';

const Register = ({ navigation }) => {
  const [nameSurname, setnameSurname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordConfrim, setpasswordConfrim] = useState('');
  const [fetchingRegister, setfetchingRegister] = useState(false);
  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });
  }, []);

  const registerValidation = () => {
    setfetchingRegister(true);
    let errorMessage;
    if (!nameSurname || nameSurname.length < 4) errorMessage = 'Lütfen geçerli ad soyad giriniz';
    else if (!email || email.length < 5 || !email.includes('@'))
      errorMessage = 'Lütfen geçerli bir email adresi giriniz.';
    else if (!password || password.length < 4) errorMessage = 'Lütfen şifrenizi doğru giriniz.';
    else if (!passwordConfrim || passwordConfrim.length < 4 || password !== passwordConfrim)
      errorMessage = 'Lütfen şifre doğrulamanızı doğru giriniz.';
    return errorMessage
      ? Alert.alert('Lütfen Dikkat!', errorMessage, [{ text: 'Tamam', onPress: () => setfetchingRegister(false) }], {
          cancelable: false,
        })
      : register();
  };

  const register = () => {
    console.log(password);
    console.log(passwordConfrim);
    setfetchingRegister(false);
  };

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
              ref={inputElementRef}
              placeholder={'Şifrenizi Giriniz'}
              style={styles.textInputStyle}
              value={password}
              onChangeText={setpassword}
              secureTextEntry={true}
              autoCompleteType={'password'}
            />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              ref={inputElementRef}
              placeholder={'Şifrenizi Doğrulayınız'}
              style={styles.textInputStyle}
              value={passwordConfrim}
              onChangeText={setpasswordConfrim}
              secureTextEntry={true}
              autoCompleteType={'password'}
            />
          </View>
          <View style={styles.registerButton}>
            <Button
              title={'Kayıt Ol'}
              onPressBtn={registerValidation}
              fetching={fetchingRegister}
              disabled={fetchingRegister}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('login')}>
        <Text style={styles.registerTextRegular}>Hesabınız var mı ?</Text>
        <Text style={styles.registerTextBold}> Giriş Yap</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default Register;
