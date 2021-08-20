import {StyleSheet} from 'react-native';
import {colors, HP, WP} from '../../../utilities';

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    // paddingVertical: WP('1'),
    marginBottom: HP('2'),
    // paddingBottom: HP(10),
    // paddingVertical: HP('2'),
    // bottom: 5,
  },
  TitleSytle: {
    marginHorizontal: WP('2'),
  },
  endCard: {
    paddingBottom: HP('5'),
    // bottom: HP('-5'),
  },
});

export default styles;
