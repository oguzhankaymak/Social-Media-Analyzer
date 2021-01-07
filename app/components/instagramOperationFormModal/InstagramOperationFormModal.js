import React, { useState } from 'react';
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
import { Colors } from '../../theme';
import { CloseIcon, DoubleRightIcon, WarningIcon } from '../icons';
import { widthPercentageToDP as wp } from '../../utils/PercentageCalculator';
import RadioButton from '../radioButton/RadioButton';

const InstagramOperationFormModal = ({ modalVisible, activeForm, close, onPressNext }) => {
  const [warningMessageControl, setwarningMessageControl] = useState(false);
  const [activeRadioButton, setactiveRadioButton] = useState(1);

  const backgroundColor = () => {
    if (activeForm === 'public') return Colors.darkModerateBlueVeryDarkBlueLinearGradient;
    return Colors.pureRedBrightRedLinearGradientColor;
  };

  const warningMessage = () => {
    setwarningMessageControl(true);
    return Alert.alert(
      'Lütfen Dikkat!',
      'Kendi hesap bilgilerime bakacağım seçeneğini seçtiğinizde istatistik bilgileriniz kaydolacaktır. Dolayısıyla farklı bir kullanıcı adı girerseniz bilgileriniz karışabilir.',
      [{ text: 'Anladım', onPress: () => {} }],
      { cancelable: false },
    );
  };

  const _renderForm = () => {
    if (activeForm === 'public') {
      return (
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.formItemTitle}>Kullanıcı Adı</Text>
            <TextInput style={styles.textInput} placeholder={'Kullanıcı Adı'} maxLength={30} />
            <View style={styles.radioButtons}>
              <View style={styles.radioButton}>
                <RadioButton
                  title={'Kendi hesap bilgilerime bakacağım'}
                  active={activeRadioButton === 1}
                  onpressRadioButton={() => setactiveRadioButton(1)}
                />
              </View>
              <TouchableOpacity style={styles.warningView} onPress={warningMessage}>
                <WarningIcon
                  width={styles.warningIcon.width}
                  height={styles.warningIcon.height}
                  color={warningMessageControl ? 'black' : 'red'}
                />
                <Text style={[styles.warningText, warningMessageControl ? { color: 'black' } : { color: 'red' }]}>
                  Neden Önemli ?
                </Text>
              </TouchableOpacity>
              <View style={styles.radioButton}>
                <RadioButton
                  title={'Farklı bir hesabın bilgilerine bakacağım'}
                  active={activeRadioButton === 2}
                  onpressRadioButton={() => setactiveRadioButton(2)}
                />
              </View>
            </View>
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
