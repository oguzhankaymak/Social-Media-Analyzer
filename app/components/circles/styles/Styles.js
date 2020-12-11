import { StyleSheet } from 'react-native';
import Colors from '../../../theme/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  circle: {
    position: 'absolute',
    width: hp('23%'),
    height: hp('23%'),
    borderRadius: hp('23%') / 2,
  },

  first: {
    top: 0,
    left: wp('35%'),
    backgroundColor: Colors.verySoftBlue,
    opacity: 0.3,
  },

  second: {
    top: hp('6%'),
    left: wp('13,33%'),
    backgroundColor: Colors.softCyan,
    opacity: 0.44,
  },
});
