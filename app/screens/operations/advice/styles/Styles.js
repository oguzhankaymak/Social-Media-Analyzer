import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';
import { Fonts, Colors } from '../../../../theme';

export default StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },

  card: {
    paddingVertical: 10,
  },

  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
