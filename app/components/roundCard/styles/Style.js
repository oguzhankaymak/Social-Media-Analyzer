import { StyleSheet } from 'react-native';
import { Fonts } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  card: {
    width: hp('17%'),
    height: hp('17%'),
    borderRadius: hp('17%') / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h22,
    marginTop: hp('1%'),
  },

  icon: {
    width: wp('8.8%'),
    height: hp('5%'),
  },
});
