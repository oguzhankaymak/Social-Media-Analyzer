import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';
import { Fonts, Colors } from '../../../../theme';

export default StyleSheet.create({
  header: {
    flex: 0.4,
    backgroundColor: Colors.moderateCyan,
  },

  icons: {
    marginTop: hp('4%'),
    paddingLeft: wp('6%'),
  },

  profile: {
    marginTop: 30,
    alignItems: 'center',
  },

  photo: {
    width: hp('13%'),
    height: hp('13%'),
    borderRadius: hp('13%') / 2,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: hp('13%'),
    height: hp('13%'),
    borderRadius: hp('13%') / 2,
  },

  photoOperation: {
    flexDirection: 'row',
  },

  line: {
    backgroundColor: Colors.white,
    height: 20,
    width: 1,
    marginHorizontal: 10,
  },

  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h4,
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

  form: {
    flex: 0.4,
    alignItems: 'center',
  },

  footer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
