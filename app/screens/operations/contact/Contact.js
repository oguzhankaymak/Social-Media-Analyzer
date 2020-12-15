import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';

import styles from './styles/Styles';
import Layout from '../../../components/layout/Layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/button/Button';
import { ContactIcon } from '../../../components/icons';

const Contact = ({ navigation }) => {
  const [subject, setsubject] = useState('');
  const [description, setdescription] = useState('');
  const [fetchingSendMessage, setfetchingSendMessage] = useState(false);

  const sendValidation = () => {
    setfetchingSendMessage(true);
    let errorMessage;
    if (!subject || subject.length < 3) errorMessage = 'Lütfen uygun bir konu girin.';
    else if (!description || description.length < 5) errorMessage = 'Lütfen açıklamanızı girin veya detaylandırın.';
    return errorMessage
      ? Alert.alert('Lütfen Dikkat!', errorMessage, [{ text: 'Tamam', onPress: () => setfetchingSendMessage(false) }], {
          cancelable: false,
        })
      : send();
  };
  const send = () => {
    setTimeout(() => {
      console.log('send');
      setsubject('');
      setdescription('');
      Alert.alert(
        'Bizimle İletişime Geçtiğiniz İçin Teşekkür Ederiz!',
        'En kısa zamanda dönüş yapılacaktır.',
        [{ text: 'Tamam' }],
        {
          cancelable: false,
        },
      );
      setfetchingSendMessage(false);
    }, 3000);
    console.log('send');
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
