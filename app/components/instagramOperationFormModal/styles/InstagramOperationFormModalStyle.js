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

  header: { alignItems: 'flex-end' },

  closeButton: {
    padding: 12,
  },

  form: {
    alignItems: 'center',
  },

  formItem: {
    alignItems: 'center',
  },

  formItemTitle: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h4,
    color: Colors.white,
  },

  textInput: {
    width: wp('80%'),
    height: 55,
    color: Colors.veryDarkMostlyBlackRed,
    backgroundColor: Colors.white,
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h31,
    marginTop: 5,
    opacity: 0.8,
    borderRadius: 100,
    textAlign: 'center',
  },

  modalView: {
    height: 350,
    width: wp('85%'),
    borderRadius: 20,
  },

  button: {
    marginTop: 30,
    backgroundColor: Colors.white,
    width: wp('45%'),
    height: 38,
    borderRadius: 10,
    flexDirection: 'row',
    paddingRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonText: {
    paddingLeft: wp('9%'),
    textAlign: 'center',
    width: wp('36%'),
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h3,
    color: Colors.veryDarkMostlyBlackRed,
  },

  doubleRightIcon: {
    height: 24,
    width: 24,
  },

  closeIcon: {
    height: 24,
    width: 24,
  },

  radioButtons: {
    marginTop: hp('1.85%'),
  },

  radioButton: {
    marginVertical: 8,
  },

  warningView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  warningText: {
    marginLeft: 8,
  },

  warningIcon: {
    height: 24,
    width: 24,
  },
});
