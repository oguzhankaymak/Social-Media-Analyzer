import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';

export default StyleSheet.create({
  header: {
    paddingTop: hp('19.5%'),
    alignItems: 'center',
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h4,
  },

  infoView: {
    marginTop: hp('1%'),
    alignItems: 'center',
  },

  infoText: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h21,
  },

  inputStyles: {
    paddingTop: hp('3%'),
  },

  textInputStyle: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h21,
    color: Colors.darkGray,
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

  registerButton: {
    marginTop: hp('3.5%'),
  },

  footer: {
    flex: 0.05,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  registerTextRegular: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h22,
    color: Colors.black,
    opacity: 0.79,
  },

  registerTextBold: {
    fontFamily: Fonts.type.PoppinsBold,
    fontSize: Fonts.size.h22,
    color: Colors.darkCyan,
  },
});
