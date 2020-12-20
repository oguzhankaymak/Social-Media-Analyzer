import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  card: {
    width: wp('95.5%'),
    borderRadius: 30,
    backgroundColor: Colors.white,
    paddingVertical: hp('2%'),
  },

  header: {
    marginLeft: hp('3%'),
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h31,
    color: Colors.black,
  },

  value: {
    fontFamily: Fonts.type.PoppinsBold,
    fontSize: Fonts.size.h41,
    color: Colors.black,
  },

  chart: {
    alignItems: 'center',
  },
});
