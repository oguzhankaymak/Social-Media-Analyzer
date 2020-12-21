import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  card: {
    width: wp('90%'),
    height: hp('18%'),
    paddingVertical: hp('2%'),
    justifyContent: 'center',
    borderRadius: 20,
  },

  timeManagementImg: { width: hp('14%'), height: hp('10%') },

  calendarImg: { width: hp('14%'), height: hp('11%') },

  pieManImg: { width: hp('14%'), height: hp('10%') },

  statisticsImg: { width: hp('14%'), height: hp('11.5%') },

  cardContent: {
    marginHorizontal: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h3,
    color: Colors.white,
  },
});
