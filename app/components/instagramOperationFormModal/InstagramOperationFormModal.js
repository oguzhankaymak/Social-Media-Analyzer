import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './styles/InstagramOperationFormModalStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Fonts } from '../../theme';
import { CloseIcon, DoubleRightIcon } from '../icons';
import Messages from '../../utils/Messages';

const InstagramOperationFormModal = ({ activeForm, close, onPressPrivateNext, onPressPublicNext }) => {
  const passwordElement = useRef(null);
  const [publicUsername, setpublicUsername] = useState('');
  const [privateUserName, setprivateUserName] = useState('');
  const [privatePassword, setprivatePassword] = useState('');

  useEffect(() => {
    passwordElement?.current?.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });
  }, []);

  const backgroundColor = () => {
    if (activeForm === 'public') return Colors.darkModerateBlueVeryDarkBlueLinearGradient;
    return Colors.pureRedBrightRedLinearGradientColor;
  };

  const onPressPrivate = () => {
    let errorMessage;
    if (!privateUserName || privateUserName.length < 3) {
      errorMessage = Messages.invalidInstagramUsername;
    } else if (!privatePassword || privatePassword.length < 5) {
      errorMessage = Messages.invalidInstagramPassword;
    }
    errorMessage
      ? Alert.alert(Messages.pleaseAttention, errorMessage, [{ text: Messages.okay, onPress: () => {} }], {
          cancelable: false,
        })
      : onPressPrivateNext(privateUserName, privatePassword);
  };

  const onPressPublic = () => {
    let errorMessage;
    if (!publicUsername || publicUsername.length < 3) {
      errorMessage = Messages.invalidInstagramUsername;
    }
    errorMessage
      ? Alert.alert(Messages.pleaseAttention, errorMessage, [{ text: Messages.okay, onPress: () => {} }], {
          cancelable: false,
        })
      : onPressPublicNext(privateUserName, privatePassword);
  };

  const onChangePrivateUsername = (text) => {
    if (!text?.includes(' ')) {
      setprivateUserName(text);
    }
  };

  const onChangePrivatePassword = (text) => {
    if (!text?.includes(' ')) {
      setprivatePassword(text);
    }
  };

  const onChangePublicUsername = (text) => {
    if (!text?.includes(' ')) {
      setpublicUsername(text);
    }
  };

  const _renderForm = () => {
    if (activeForm === 'public') {
      return (
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.formItemTitle}>Kullanıcı Adı</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangePublicUsername}
              placeholder={'Kullanıcı Adı'}
              maxLength={30}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={onPressPublic}>
            <Text style={styles.buttonText}>İlerle</Text>
            <View style={styles.doubleRightIconView}>
              <DoubleRightIcon
                stroke={Colors.veryDarkMostlyBlackRed}
                width={styles.doubleRightIcon.width}
                height={styles.doubleRightIcon.height}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.form}>
        <View style={styles.formItem}>
          <Text style={styles.formItemTitle}>Kullanıcı Adı</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangePrivateUsername}
            placeholder={'Kullanıcı Adı'}
            maxLength={30}
          />
        </View>
        <View style={[styles.formItem, { marginTop: 20 }]}>
          <Text style={styles.formItemTitle}>Şifre</Text>
          <TextInput
            ref={passwordElement}
            style={styles.textInput}
            onChangeText={onChangePrivatePassword}
            autoCompleteType={'password'}
            secureTextEntry={true}
            placeholder={'Şifre'}
            maxLength={40}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressPrivate}>
          <Text style={styles.buttonText}>İlerle</Text>
          <View style={styles.doubleRightIconView}>
            <DoubleRightIcon
              stroke={Colors.veryDarkMostlyBlackRed}
              width={styles.doubleRightIcon.width}
              height={styles.doubleRightIcon.height}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal animationType="slide" transparent={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.centeredView}>
          <LinearGradient colors={backgroundColor()} style={styles.modalView}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.closeButton} onPress={close}>
                <CloseIcon width={styles.closeIcon.width} height={styles.closeIcon.height} color={Colors.white} />
              </TouchableOpacity>
            </View>
            {_renderForm()}
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default InstagramOperationFormModal;
