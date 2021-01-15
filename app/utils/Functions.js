import { Alert } from 'react-native';

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const generalErrorMessage = () => {
  return Alert.alert(
    'Maalesef İşleminiz Gerçekleştirilemedi!',
    'Bir sorun oluştu lütfen daha sonra tekrar deneyiniz.',
    [{ text: 'Tamam' }],
  );
};

export { emailIsValid, generalErrorMessage };
