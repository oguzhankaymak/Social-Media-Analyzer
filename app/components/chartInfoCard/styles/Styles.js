import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90%'),
    height: 70,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: Colors.verySoftBlue,
  },

  title: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h21,
    color: Colors.white,
    marginLeft: 8,
  },
});
