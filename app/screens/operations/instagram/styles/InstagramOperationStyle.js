import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  headerImage: {
    width: wp('100%'),
    height: 210,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mediumVerySoftBlue,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginBottom: hp('3%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },

  nameSurnameText: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h4,
    color: Colors.black,
  },

  usernameText: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h22,
    color: Colors.grayishBlue,
  },

  bioText: {
    marginTop: hp('2%'),
    fontFamily: Fonts.type.PoppinsLight,
    fontSize: Fonts.size.h22,
    color: Colors.grayishBlue,
  },

  headerTexts: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  accountTexts: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
  },

  accountInfoCard: {
    flexDirection: 'row',
    marginTop: hp('3%'),
    height: 85,
    borderColor: Colors.lineOpacityColor,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    justifyContent: 'space-around',
  },

  accountInfoDetailCard: {
    minWidth: wp('18%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  counterText: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h22,
    color: Colors.black,
  },

  counterTitleText: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h22,
    color: Colors.grayishBlue,
  },
});
