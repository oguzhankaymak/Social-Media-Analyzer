import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  chartTypeCardView: {
    marginVertical: hp('2%'),
  },
});
