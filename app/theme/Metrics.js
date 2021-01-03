import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

const metris = {
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  statusBarHeight: Constants.statusBarHeight,
  BOTTOM_TAB_HEIGHT: 50,
};

export default metris;
