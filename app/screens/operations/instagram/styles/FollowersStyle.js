import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrayishBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  calendarIconView: {
    width: 50,
    height: 50,
    backgroundColor: Colors.lightBlue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchView: {
    flex: 0.15,
    width: wp('90%'),
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInputView: {
    marginLeft: wp('3%'),
    paddingLeft: wp('2%'),
    width: wp('90%') - 50 - wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.lineOpacityColor,
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
  },

  textInput: {
    width: wp('90%') - 50 - wp('3%'),
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h21,
    alignItems: 'center',
    paddingHorizontal: wp('2.5%'),
    height: 50,
  },

  icon: {
    width: 24,
    height: 24,
  },

  searchIcon: {
    width: 20,
    height: 20,
  },

  listView: { flex: 0.85 },
});
