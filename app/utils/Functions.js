import { Alert } from 'react-native';
import Messages from './Messages';

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const generalErrorMessage = () => {
  return Alert.alert(Messages.generalErrorTitle, Messages.generalErrorContent, [{ text: Messages.okay }]);
};

export { emailIsValid, generalErrorMessage };
