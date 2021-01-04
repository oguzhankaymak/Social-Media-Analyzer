import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  card: {
    width: wp('93%'),
    height: hp('38%'),
    borderRadius: 20,
  },

  header: {
    height: hp('7.3%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  line: {
    borderBottomColor: '#00ff001C',
    borderBottomWidth: 1,
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h3,
    color: Colors.white,
  },

  container: {
    flex: 1,
    paddingLeft: wp('3%'),
    paddingRight: wp('5%'),

    justifyContent: 'space-around',
  },
});
