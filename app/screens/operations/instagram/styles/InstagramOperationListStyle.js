import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utils/PercentageCalculator';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h21,
    color: Colors.white,
    marginLeft: 10,
  },
});
