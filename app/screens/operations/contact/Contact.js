import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';

import styles from './styles/Styles';
import Layout from '../../../components/layout/Layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/button/Button';
import { ContactIcon } from '../../../components/icons';
import Messages from '../../../utils/Messages';
import { request } from '../../../utils/Request';
import { generalErrorMessage } from '../../../utils/Functions';

const Contact = ({ navigation }) => {
  const [subject, setsubject] = useState('');
  const [description, setdescription] = useState('');
  const [fetchingSendMessage, setfetchingSendMessage] = useState(false);

  const sendValidation = () => {
    let errorMessage;
    if (!subject || subject.length < 3) errorMessage = Messages.invalidSubject;
    else if (!description || description.length < 5) errorMessage = Messages.invalidDescription;
    return errorMessage
      ? Alert.alert(Messages.pleaseAttention, errorMessage, [{ text: Messages.okay, onPress: () => {} }], {
          cancelable: false,
        })
      : send();
  };

  const resetData = () => {
    setsubject('');
    setdescription('');
  };

  const send = async () => {
    try {
      setfetchingSendMessage(true);
      const response = await request.post('/api/feedback/add', { topic: subject, message: description });
      if (response?.status === 200 && response?.data) {
        setfetchingSendMessage(false);
        if (response?.data?.success) {
          resetData();
          return Alert.alert(
            Messages.successfullyContactTitle,
            Messages.successfullyContactDescription,
            [{ text: Messages.okay }],
            {
              cancelable: false,
            },
          );
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
        setfetchingSendMessage(false);
        return generalErrorMessage();
      }
      setfetchingSendMessage(false);
      return generalErrorMessage();
    } catch (error) {
      setfetchingSendMessage(false);
      return generalErrorMessage();
    }
  };

  return (
    <Layout>
      <View style={styles.header}>
        <View style={styles.iconView}>
          <ContactIcon width={styles.icon.width} height={styles.icon.height} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>BİZE YAZIN</Text>
        </View>
      </View>
      <View style={styles.form}>
        <KeyboardAwareScrollView enableOnAndroid={true} bounces={false}>
          <View style={styles.inputStyles}>
            <TextInput
              placeholder={'Konu'}
              style={styles.textInputStyle}
              value={subject}
              onChangeText={setsubject}
              keyboardType={'visible-password'}
              editable={!fetchingSendMessage}
            />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              placeholder={'Mesajınız'}
              style={styles.multiLineTextInputStyle}
              value={description}
              onChangeText={setdescription}
              keyboardType={'visible-password'}
              multiline={true}
              editable={!fetchingSendMessage}
            />
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.button}>
          <Button
            title={'Gönder'}
            fetching={fetchingSendMessage}
            disabled={fetchingSendMessage}
            onPressBtn={sendValidation}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Contact;
