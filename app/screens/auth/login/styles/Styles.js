import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';

export default StyleSheet.create({
  header: {
    paddingTop: hp('20%'),
    alignItems: 'center',
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h4,
    paddingBottom: hp('3%'),
  },

  socialGirlIconView: {
    alignItems: 'center',
  },

  socialGirlIcon: {
    width: wp('67%'),
    height: hp('29%'),
  },

  inputStyles: {
    paddingTop: hp('3%'),
  },

  textInputStyle: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h21,
    color: '#8E8E8E',
    width: wp('86,66%'),
    height: hp('7.3%'),
    paddingHorizontal: wp('5,33%'),
    paddingVertical: hp('1.5%'),
    backgroundColor: Colors.lightGrayishRed,
    opacity: 0.79,
    borderRadius: 100,
  },

  form: {
    flex: 0.95,
    alignItems: 'center',
  },

  loginButton: {
    marginTop: hp('3.5%'),
  },

  footer: {
    flex: 0.05,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  loginTextRegular: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h22,
    color: Colors.black,
    opacity: 0.79,
  },

  loginTextBold: {
    fontFamily: Fonts.type.PoppinsBold,
    fontSize: Fonts.size.h22,
    color: Colors.darkCyan,
  },
});
