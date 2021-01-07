import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles/InstagramOperationListStyle';
import Layout from '../../../components/layout/Layout';
import VerticalLinearCard from '../../../components/verticalLinearCard/VerticalLinearCard';
import { KeyIcon, CreditCardIcon, InfoIcon } from '../../../components/icons';
import { Colors } from '../../../theme';
import InstagramOperationFormModal from '../../../components/instagramOperationFormModal/InstagramOperationFormModal';

const InstagramOperationList = ({ navigation }) => {
  const [formModalVisible, setformModalVisible] = useState(false);
  const [form, setform] = useState('');

  const onpressPublicCard = () => {
    setform('public');
    setformModalVisible(true);
  };

  const onpressPrivateCard = () => {
    setform('private');
    setformModalVisible(true);
  };

  const next = () => {
    setformModalVisible(false);
    navigation.navigate('instagramOperation');
  };

  return (
    <Layout>
      <InstagramOperationFormModal
        modalVisible={formModalVisible}
        activeForm={form}
        close={() => setformModalVisible(false)}
        onPressNext={next}
      />
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
