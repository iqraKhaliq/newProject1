import {Dimensions, StyleSheet} from 'react-native';
import {colors, family, HP, size} from '../../../utilities';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    // marginHorizontal: WP('2'),
    paddingVertical: HP('2'),
    // marginTop: HP('30'),
  },
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HP('15'),
  },
  viewBottom: {
    marginTop: HP('18'),
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  SimpleText: {
    fontFamily: family.Poppins_Regular,
    fontSize: size.medium,
    color: colors.black,
  },
  ColoredText: {
    fontFamily: family.Poppins_Bold,
    fontSize: size.medium,
    color: colors.red,
  },
});

export default styles;
