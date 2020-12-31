import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90%'),
    height: 60,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },

  content: {
    paddingHorizontal: 10,
  },

  count: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h3,
    color: Colors.black,
    height: 20,
  },

  date: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h21,
    color: Colors.black,
  },
});
