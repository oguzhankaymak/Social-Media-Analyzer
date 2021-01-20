import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  card: {
    width: hp('45%'),
    minHeight: 300,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  header: {
    height: 180,
    alignItems: 'center',
  },

  image: {
    width: hp('50%'),
    height: 140,
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h32,
    color: Colors.black,
    marginTop: 15,
  },

  text: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h22,
    color: Colors.black,
  },

  description: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});
