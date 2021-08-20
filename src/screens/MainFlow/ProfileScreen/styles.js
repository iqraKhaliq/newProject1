import {StyleSheet} from 'react-native';
import {colors, HP} from '../../../utilities';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // marginHorizontal: WP('2'),
    paddingBottom: HP('1'),
    backgroundColor: colors.white,
  },
  dividerStyle: {
    borderWidth: 1,
    borderColor: colors.silver,
  },
});

export default styles;
