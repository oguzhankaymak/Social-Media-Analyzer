import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.modalBackgroundColor,
  },

  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.mediumLightGrayishBlue,
    borderRadius: 20,
    paddingHorizontal: wp('4%'),
    paddingVertical: 20,
    width: wp('90%'),
  },

  modalTitle: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h32,
    color: Colors.white,
  },

  inputStyles: {
    paddingTop: hp('4%'),
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

  footer: {
    marginTop: 25,
  },
});
