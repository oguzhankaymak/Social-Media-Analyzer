import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import SquareImageCard from '../../../components/squareImageCard/SquareImageCard';

import styles from './styles/Styles';
import { request } from '../../../utils/Request';
import { generalErrorMessage } from '../../../utils/Functions';
import Layout from '../../../components/layout/Layout';

const Advice = () => {
  const [adviceList, setAdviceList] = useState([]);
  const [fetchingAdvice, setFetchingAdvice] = useState(false);

  useEffect(() => {
    getAdviceList();
  }, []);

  const getAdviceList = async () => {
    try {
      setFetchingAdvice(true);
      const response = await request.get('/suggesstion/list');
      if (response?.status === 200 && response?.data) {
        setFetchingAdvice(false);
        if (response?.data?.success) {
          return setAdviceList(response?.data?.results);
        }
        return generalErrorMessage();
      }
      setFetchingAdvice(false);
      return generalErrorMessage();
    } catch (error) {
      setFetchingAdvice(false);
      return generalErrorMessage();
    }
  };
  return (
    <Layout>
      {fetchingAdvice ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      ) : (
        adviceList && (
          <View style={styles.container}>
            <ScrollView>
              {adviceList.map((item, index) => (
                <View style={styles.card} key={String(index)}>
                  <SquareImageCard image={item.photoUrl} title={item.title} description={item.description} />
                </View>
              ))}
            </ScrollView>
          </View>
        )
      )}
    </Layout>
  );
};

export default Advice;
