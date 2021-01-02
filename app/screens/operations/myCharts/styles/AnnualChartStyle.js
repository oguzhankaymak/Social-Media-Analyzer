import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';

export default StyleSheet.create({
  header: {
    marginTop: 50,
    alignItems: 'center',
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h42,
    color: Colors.black,
  },

  chart: {
    width: wp('100%'),
  },

  footer: {
    alignItems: 'center',
  },

  infoCard: {
    marginVertical: 8,
  },

  contentCard: {
    marginTop: 15,
  },
});
