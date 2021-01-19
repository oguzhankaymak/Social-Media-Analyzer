import React from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, TextInput, Keyboard, TouchableOpacity } from 'react-native';

import styles from './styles/InstagramOperationFormModalStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../theme';
import { CloseIcon, DoubleRightIcon } from '../icons';

const InstagramOperationFormModal = ({ modalVisible, activeForm, close, onPressNext }) => {
  const backgroundColor = () => {
    if (activeForm === 'public') return Colors.darkModerateBlueVeryDarkBlueLinearGradient;
    return Colors.pureRedBrightRedLinearGradientColor;
  };

  const _renderForm = () => {
    if (activeForm === 'public') {
      return (
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.formItemTitle}>Kullanıcı Adı</Text>
            <TextInput style={styles.textInput} placeholder={'Kullanıcı Adı'} maxLength={30} />
          </View>
          <TouchableOpacity style={styles.button} onPress={onPressNext}>
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
          <TextInput style={styles.textInput} placeholder={'Kullanıcı Adı'} maxLength={30} />
        </View>
        <View style={[styles.formItem, { marginTop: 20 }]}>
          <Text style={styles.formItemTitle}>Şifre</Text>
          <TextInput style={styles.textInput} placeholder={'Şifre'} maxLength={40} />
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressNext}>
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
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
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
