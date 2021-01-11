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
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: wp('4%'),
    paddingVertical: 20,
    width: wp('90%'),
  },

  title: {
    fontFamily: Fonts.type.PoppinsSemiBold,
    fontSize: Fonts.size.h3,
    color: Colors.black,
  },

  content: {
    fontFamily: Fonts.type.PoppinsRegular,
    fontSize: Fonts.size.h22,
    color: Colors.darkGray,
  },

  line: {
    borderBottomColor: Colors.lineOpacityColor,
    borderBottomWidth: 1,
    width: wp('70%'),
    marginVertical: 5,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIcon: {
    marginTop: 5,
    marginBottom: 10,
  },

  icons: {
    width: 24,
    height: 24,
    color: Colors.darkGray,
  },
});
