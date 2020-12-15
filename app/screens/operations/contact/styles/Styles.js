import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';

export default StyleSheet.create({
  header: {
    flex: 0.3,
  },

  iconView: {
    alignItems: 'flex-end',
    marginTop: hp('5.5%'),
    marginRight: wp('8%'),
  },

  icon: {
    width: wp('40%'),
    height: hp('10%'),
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h42,
    color: Colors.black,
  },

  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('5.5%'),
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

  multiLineTextInputStyle: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h21,
    color: Colors.darkGray,
    textAlignVertical: 'top',
    width: wp('86,66%'),
    height: hp('35%'),
    paddingHorizontal: wp('5,33%'),
    paddingVertical: hp('1.5%'),
    backgroundColor: Colors.lightGrayishRed,
    opacity: 0.79,
    borderRadius: 20,
  },

  form: {
    flex: 0.7,
    alignItems: 'center',
  },

  button: {
    marginBottom: hp('2.5%'),
  },
});
