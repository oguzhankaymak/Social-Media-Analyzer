import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import styles from './styles/InstagramOperationListStyle';
import Layout from '../../../components/layout/Layout';
import VerticalLinearCard from '../../../components/verticalLinearCard/VerticalLinearCard';
import { KeyIcon, CreditCardIcon, InfoIcon } from '../../../components/icons';
import { Colors } from '../../../theme';
import InstagramOperationFormModal from '../../../components/instagramOperationFormModal/InstagramOperationFormModal';
import { request } from '../../../utils/Request';
import Messages from '../../../utils/Messages';
import { generalErrorMessage } from '../../../utils/Functions';

const InstagramOperationList = ({ navigation }) => {
  const [formModalVisible, setformModalVisible] = useState(false);
  const [form, setform] = useState('');
  const [privateAccountLoading, setprivateAccountLoading] = useState(false);

  const onpressPublicCard = () => {
    setform('public');
    setformModalVisible(true);
  };

  const onpressPrivateCard = () => {
    setform('private');
    setformModalVisible(true);
  };

  const privateAccountNext = async (username, password) => {
    if (username && password) {
      try {
        setprivateAccountLoading(true);
        const response = await request.post('/api/instagram/user-info', { username: username, password: password });
        if (response.status === 200 && response?.data) {
          setprivateAccountLoading(false);
          if (response?.data?.success) {
            setformModalVisible(false);
            return navigation.navigate('privateInstagramOperation', {
              userInfo: response?.data?.data,
            });
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
        setprivateAccountLoading(false);
        return generalErrorMessage();
      } catch (error) {
        setprivateAccountLoading(false);
        return generalErrorMessage();
      }
    }
  };

  const next = () => {
    setformModalVisible(false);
    navigation.navigate('publicInstagramOperation');
  };

  return (
    <Layout>
      {formModalVisible && (
        <InstagramOperationFormModal
          activeForm={form}
          close={() => setformModalVisible(false)}
          onPressNext={next}
          privateLoading={privateAccountLoading}
          onPressPrivateNext={(username, password) => privateAccountNext(username, password)}
        />
      )}

      <View style={styles.container}>
        <VerticalLinearCard
          headerTitle={'Açık Hesap İşlemleri'}
          linearColor={Colors.darkModerateBlueVeryDarkBlueLinearGradient}
          onPressCard={onpressPublicCard}>
          <View style={styles.content}>
            <KeyIcon stroke={'white'} />
            <Text style={styles.text}>Herhangi bir şifre bilgisi vermeden işlemlerinizi gerçekleştirebilirsiniz.</Text>
          </View>
          <View style={styles.content}>
            <InfoIcon stroke={'white'} />
            <Text style={styles.text}>Hesabınızı kısa süreliğine açık hesap haline getirip devam edebilirsiniz.</Text>
          </View>
          <View style={styles.content}>
            <CreditCardIcon stroke={'white'} />
            <Text style={styles.text}>Hiçbir ücret ödemeden günlük 5 hakkınızı kullanabilirsiniz.</Text>
          </View>
        </VerticalLinearCard>
        <VerticalLinearCard
          headerTitle={'Gizli Hesap İşlemleri'}
          linearColor={Colors.pureRedBrightRedLinearGradientColor}
          onPressCard={onpressPrivateCard}>
          <View style={styles.content}>
            <KeyIcon stroke={'white'} />
            <Text style={styles.text}>
              Hesabınız gizli olduğu için maalesef içeriklere erişemiyoruz dolayısıyla şifre bilgisi gerekmektedir.
            </Text>
          </View>
          <View style={styles.content}>
            <InfoIcon stroke={'white'} />
            <Text style={styles.text}>Şifre bilginiz hiçbir şekilde kaydedilmemektedir.</Text>
          </View>
          <View style={styles.content}>
            <CreditCardIcon stroke={'white'} />
            <Text style={styles.text}>Hiçbir ücret ödemeden günlük 5 hakkınızı kullanabilirsiniz.</Text>
          </View>
        </VerticalLinearCard>
      </View>
    </Layout>
  );
};

export default InstagramOperationList;
