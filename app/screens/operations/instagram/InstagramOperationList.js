import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles/InstagramOperationStyle';
import Layout from '../../../components/layout/Layout';
import VerticalLinearCard from '../../../components/verticalLinearCard/VerticalLinearCard';
import { KeyIcon, CreditCardIcon, InfoIcon } from '../../../components/icons';
import { Colors } from '../../../theme';

const InstagramOperationList = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <VerticalLinearCard
          headerTitle={'Açık Hesap İşlemleri'}
          linearColor={Colors.darkModerateBlueVeryDarkBlueLinearGradient}>
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
          linearColor={Colors.pureRedBrightRedLinearGradientColor}>
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
