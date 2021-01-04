import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utils/PercentageCalculator';

export default StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bigCircle: {
    backgroundColor: Colors.white,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallCircle: {
    backgroundColor: Colors.softCyan,
    width: 14,
    height: 14,
    borderRadius: 7,
  },

  title: { marginLeft: 8 },
});
