import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, TextInput, Alert } from 'react-native';
import { Fonts } from '../../theme';
import Messages from '../../utils/Messages';
import Button from '../button/Button';

import styles from './styles/Styles';

const PasswordChangeModal = ({ close, loading, passwordChange }) => {
  const passwordElement = useRef(null);
  const newPasswordElement = useRef(null);
  const newPasswordConfrimElement = useRef(null);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfrim, setNewPasswordConfrim] = useState('');

  useEffect(() => {
    passwordElement.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });

    newPasswordElement.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });

    newPasswordConfrimElement.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });
  }, []);

  const onChangePassword = (text) => {
    if (!text?.includes(' ')) {
      setPassword(text);
    }
  };

  const onChangeNewPassword = (text) => {
    if (!text?.includes(' ')) {
      setNewPassword(text);
    }
  };

  const onChangePasswordConfrim = (text) => {
    if (!text?.includes(' ')) {
      setNewPasswordConfrim(text);
    }
  };

  const passwordUpdateValidation = () => {
    let errorMessage;

    if (!password || password.length < 4) errorMessage = Messages.invalidPassword;
    else if (!newPassword || newPassword.length < 4) errorMessage = Messages.invalidLengthPassword;
    else if (!newPasswordConfrim || newPasswordConfrim.length < 4 || newPassword !== newPasswordConfrim)
      errorMessage = Messages.invalidPasswordConfrim;
    return errorMessage
      ? Alert.alert(Messages.pleaseAttention, errorMessage, [{ text: Messages.okay, onPress: () => {} }], {
          cancelable: false,
        })
      : passwordChange(password, newPassword);
  };

  return (
    <Modal animationType="fade" transparent={true}>
      <TouchableOpacity style={styles.centeredView} activeOpacity={1} onPressOut={close} disabled={loading}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Şifre Değiştirme</Text>
            <View style={styles.inputStyles}>
              <TextInput
                ref={passwordElement}
                placeholder={'Şifrenizi Giriniz'}
                style={styles.textInputStyle}
                value={password}
                onChangeText={onChangePassword}
                autoCompleteType={'password'}
                secureTextEntry={true}
                editable={!loading}
              />
            </View>
            <View style={styles.inputStyles}>
              <TextInput
                ref={newPasswordElement}
                placeholder={'Yeni Şifrenizi Giriniz'}
                style={styles.textInputStyle}
                value={newPassword}
                onChangeText={onChangeNewPassword}
                autoCompleteType={'password'}
                secureTextEntry={true}
                editable={!loading}
              />
            </View>
            <View style={styles.inputStyles}>
              <TextInput
                ref={newPasswordConfrimElement}
                placeholder={'Yeni Şifrenizi Onaylayınız'}
                style={styles.textInputStyle}
                value={newPasswordConfrim}
                onChangeText={onChangePasswordConfrim}
                autoCompleteType={'password'}
                secureTextEntry={true}
                editable={!loading}
              />
              <View style={styles.footer}>
                <Button
                  title={'Şifremi Güncele'}
                  colorName={'save'}
                  onPressBtn={passwordUpdateValidation}
                  fetching={loading}
                  disabled={loading}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default PasswordChangeModal;
