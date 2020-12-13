import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Layout from '../../../components/layout/Layout';
import RoundCard from '../../../components/roundCard/RoundCard';
import styles from './styles/Styles';

const Home = () => {
  return (
    <Layout>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Hoşgeldin,</Text>
          <Text style={styles.nameText}>Oğuzhan!</Text>
        </View>
        <Image style={styles.socialAnnouncementGif} source={require('../../../assets/gifs/socialAnnouncement.gif')} />
      </View>
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={styles.cards}>
            <View style={styles.card}>
              <RoundCard name={'instagram'} title={'İşlemler'} />
            </View>
            <View style={styles.card}>
              <RoundCard name={'advice'} title={'Öneriler'} />
            </View>
            <View style={styles.card}>
              <RoundCard name={'charts'} title={'Grafiklerim'} />
            </View>
            <View style={styles.card}>
              <RoundCard name={'contact'} title={'Bize Ulaşın'} />
            </View>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Home;
