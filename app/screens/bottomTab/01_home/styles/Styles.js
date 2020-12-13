import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';

export default StyleSheet.create({
  header: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  container: {
    flex: 0.6,
  },

  cards: {
    flexDirection: 'row',
  },

  card: {
    marginHorizontal: wp('4%'),
  },

  socialAnnouncementGif: {
    width: wp('49%'),
    height: hp('27%'),
  },

  welcomeText: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h31,
    color: Colors.softLimeGreen,
  },

  nameText: {
    fontFamily: Fonts.type.PoppinsBold,
    fontSize: Fonts.size.h61,
  },
});
