import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  card: {
    width: wp('93.3%'),
    borderRadius: 30,
    justifyContent: 'center',
    paddingRight: wp('18%'),
    paddingLeft: wp('2%'),
    paddingVertical: hp('4%'),
  },

  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h22,
    color: Colors.white,
    marginLeft: wp('4%'),
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoText: {
    fontFamily: Fonts.type.PoppinsLight,
    fontSize: Fonts.size.h22,
    color: Colors.white,
    marginLeft: wp('4%'),
    marginTop: hp('1%'),
  },

  round: {
    backgroundColor: 'white',
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('16%') / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chartSquareBarIcon: {
    width: wp('8%'),
    height: hp('4%'),
    color: Colors.black,
  },
});
