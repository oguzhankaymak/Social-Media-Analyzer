import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';

import Layout from '../../../components/layout/Layout';
import RoundCard from '../../../components/roundCard/RoundCard';
import HomeDescriptionCard from '../../../components/homeDescriptionCard/HomeDescriptionCard';
import styles from './styles/Styles';
import { useSelector } from 'react-redux';
import { request } from '../../../utils/Request';
import { generalErrorMessage } from '../../../utils/Functions';

const Home = ({ navigation }) => {
  const userItem = useSelector((state) => state.userItem);

  const [randomHint, setRandomHint] = useState(null);
  const [fetchingRandomHint, setfetchingRandomHint] = useState(false);

  useEffect(() => {
    getRandomHint();
  }, []);

  const getRandomHint = async () => {
    if (userItem?.token) {
      try {
        setfetchingRandomHint(true);
        const response = await request.get('/get-random-hint');
        if (response.status === 200 && response?.data) {
          setfetchingRandomHint(false);
          if (response?.data?.success) {
            return setRandomHint(response?.data?.results);
          }
          return generalErrorMessage();
        }
      } catch (error) {
        setfetchingRandomHint(false);
        return generalErrorMessage();
      }
    }
  };

  return (
    <Layout>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Hoşgeldin,</Text>
          <Text style={styles.nameText}>{userItem?.user?.firstname}!</Text>
        </View>
        <Image style={styles.socialAnnouncementGif} source={require('../../../assets/gifs/socialAnnouncement.webp')} />
      </View>
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cards}>
            <View style={styles.card}>
              <RoundCard
                name={'instagram'}
                title={'İşlemler'}
                onPressCard={() => navigation.navigate('instagramOperationStack')}
              />
            </View>
            <View style={styles.card}>
              <RoundCard name={'advice'} title={'Öneriler'} />
            </View>
            <View style={styles.card}>
              <RoundCard name={'charts'} title={'Grafiklerim'} onPressCard={() => navigation.navigate('chartsStack')} />
            </View>
            <View style={styles.card}>
              <RoundCard name={'contact'} title={'Bize Ulaşın'} onPressCard={() => navigation.navigate('contact')} />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          {fetchingRandomHint ? (
            <ActivityIndicator size={'large'} color={'white'} />
          ) : (
            randomHint && (
              <HomeDescriptionCard
                title={randomHint?.title}
                description={randomHint?.description}
                cardName={randomHint?.cardName}
              />
            )
          )}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Home;
