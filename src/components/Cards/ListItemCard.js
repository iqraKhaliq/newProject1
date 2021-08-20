import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {colors, WP, HP, size, family} from '../../utilities';
// import {Divider} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const ListItemCard = ({icon, title}) => {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity style={styles.viewStyle}>
        <Image source={icon} style={styles.imageStyle} />
        <Text style={styles.coloredText}>{title}</Text>
      </TouchableOpacity>
      {/* <Divider style={styles.dividerStyle} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    paddingVertical: HP('1'),
    marginHorizontal: WP('3'),
  },
  viewStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: HP('1'),
    marginHorizontal: WP('2'),
  },
  imageStyle: {
    width: WP('6.5'),
    height: HP('3.2'),
  },
  coloredText: {
    fontFamily: family.Poppins_Regular,
    color: colors.darkGray,
    fontSize: size.large,
    marginLeft: WP('2'),
  },
  dividerStyle: {
    borderWidth: 1,
    borderColor: colors.gray,
  },
});

export {ListItemCard};
