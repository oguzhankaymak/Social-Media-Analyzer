import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Updates from 'expo-updates';
import * as Font from 'expo-font';

import Navigator from './app/navigation/NavigationStack';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    let { isAvailable } = await Updates.checkForUpdateAsync();
    if (isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }

    try {
      await Font.loadAsync({
        poppinsRegular: require('./app/assets/fonts/Poppins-Regular.ttf'),
        poppinsSemiBold: require('./app/assets/fonts/Poppins-SemiBold.ttf'),
        poppinsBold: require('./app/assets/fonts/Poppins-Bold.ttf'),
      });
    } catch (error) {
      console.log('error on font load');
    } finally {
      setFontLoaded(true);
    }
  };

  if (!fontLoaded) return null;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  );
}
