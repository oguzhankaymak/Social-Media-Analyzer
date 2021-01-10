import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  flatlistCard: {
    width: wp('90%'),
    height: 80,
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },

  nameSurnameText: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h22,
    color: Colors.black,
  },

  usernameText: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h21,
    color: Colors.grayishBlue,
  },
});
