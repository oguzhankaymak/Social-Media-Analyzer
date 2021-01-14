import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Updates from 'expo-updates';
import * as Font from 'expo-font';

import Navigator from './app/navigation/NavigationStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './app/redux/Store';

const { persistor, store } = configureStore();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    if (!__DEV__) {
      let { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    try {
      await Font.loadAsync({
        poppinsRegular: require('./app/assets/fonts/Poppins-Regular.ttf'),
        poppinsSemiBold: require('./app/assets/fonts/Poppins-SemiBold.ttf'),
        poppinsBold: require('./app/assets/fonts/Poppins-Bold.ttf'),
        poppinsLight: require('./app/assets/fonts/Poppins-Light.ttf'),
      });
    } catch (error) {
      console.log('error on font load');
    } finally {
      setFontLoaded(true);
    }
  };

  if (!fontLoaded) return null;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
