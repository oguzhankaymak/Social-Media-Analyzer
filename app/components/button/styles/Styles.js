import { StyleSheet } from 'react-native';
import { Fonts } from '../../../theme';
import Colors from '../../../theme/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.moderateCyan,
    width: wp('87%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h32,
    color: Colors.white,
  },
});
