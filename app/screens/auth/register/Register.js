import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './styles/Styles';
import Layout from '../../../components/layout/Layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Circles from '../../../components/circles/Circles';
import Button from '../../../components/button/Button';
import { Fonts } from '../../../theme';
import { emailIsValid, generalErrorMessage } from '../../../utils/Functions';
import request from '../../../utils/Request';
import Messages from '../../../utils/Messages';

const Register = ({ navigation }) => {
  const [nameSurname, setnameSurname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordConfrim, setpasswordConfrim] = useState('');
  const [fetchingRegister, setfetchingRegister] = useState(false);
  const passwordElementRef = useRef(null);
  const passwordConfrimElementRef = useRef(null);

  useEffect(() => {
    passwordElementRef.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });

    passwordConfrimElementRef.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });
  }, []);

  const resetForm = () => {
    setnameSurname('');
    setemail('');
    setpassword('');
    setpasswordConfrim('');
  };

  const registerValidation = () => {
    let errorMessage;
    if (!nameSurname || nameSurname.length < 4 || !nameSurname.includes(' ')) errorMessage = Messages.nameSurnameIsNull;
    else if (!email || !emailIsValid(email)) errorMessage = Messages.invalidEmail;
    else if (!password || password.length < 4) errorMessage = Messages.invalidPassword;
    else if (!passwordConfrim || passwordConfrim.length < 4 || password !== passwordConfrim)
      errorMessage = Messages.invalidPasswordConfrim;
    return errorMessage
      ? Alert.alert(Messages.pleaseAttention, errorMessage, [{ text: Messages.okay, onPress: () => {} }], {
          cancelable: false,
        })
      : register();
  };

  const register = async () => {
    setfetchingRegister(true);
    try {
      let nameSurnameArray = nameSurname.split(' ');
      let params = {
        firstname: nameSurnameArray[0],
        surname: nameSurnameArray[1],
        email: email,
        password: password,
      };
      const response = await request.post('/account/register', params);
      if (response?.status === 200 && response?.data) {
        setfetchingRegister(false);
        if (response?.data?.success) {
          navigation.navigate('login');
          Alert.alert(
            Messages.success,
            Messages.registerSuccess,
            [
              {
                text: Messages.okay,
                onPress: () => {
                  navigation.navigate('login');
                },
              },
            ],
            {
              cancelable: false,
            },
          );
          return resetForm();
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
      setfetchingRegister(false);
      return generalErrorMessage();
    } catch (error) {
      console.log(error, 'error on register');
      setfetchingRegister(false);
      return generalErrorMessage();
    }
  };

  const onChangeEmail = (text) => {
    if (!text?.includes(' ')) {
      setemail(text);
    }
  };

  const onChangePassword = (text) => {
    if (!text?.includes(' ')) {
      setpassword(text);
    }
  };

  const onChangePasswordConfrim = (text) => {
    if (!text?.includes(' ')) {
      setpasswordConfrim(text);
    }
  };

  const _renderFooter = () => (
    <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('login')} disabled={fetchingRegister}>
      <Text style={styles.registerTextRegular}>Hesabınız var mı ?</Text>
      <Text style={styles.registerTextBold}> Giriş Yap</Text>
    </TouchableOpacity>
  );

  const _renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Sosyal Medya Analizcisine</Text>
      <Text style={styles.title}>Hoşgeldiniz</Text>
      <View style={styles.infoView}>
        <Text style={styles.infoText}>Hizmetlerimizden ücretsiz bir şekilde </Text>
        <Text style={styles.infoText}>faydalanmak için hesap oluşturmanız</Text>
        <Text style={styles.infoText}>gerekmektedir.</Text>
      </View>
    </View>
  );

  return (
    <Layout>
      <View style={styles.form}>
        <KeyboardAwareScrollView enableOnAndroid={true} bounces={false}>
          <Circles />
          {_renderHeader()}
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
              onChangeText={onChangeEmail}
              keyboardType={'visible-password'}
              autoCapitalize={'none'}
            />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              ref={passwordElementRef}
              placeholder={'Şifrenizi Giriniz'}
              style={styles.textInputStyle}
              value={password}
              onChangeText={onChangePassword}
              secureTextEntry={true}
              autoCompleteType={'password'}
            />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              ref={passwordConfrimElementRef}
              placeholder={'Şifrenizi Doğrulayınız'}
              style={styles.textInputStyle}
              value={passwordConfrim}
              onChangeText={onChangePasswordConfrim}
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
      {_renderFooter()}
    </Layout>
  );
};

export default Register;
