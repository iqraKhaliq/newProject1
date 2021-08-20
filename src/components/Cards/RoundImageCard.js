import React from 'react';
import {StyleSheet, Image, Platform, TouchableOpacity} from 'react-native';
import {colors, HP, WP} from '../../utilities';

const RoundImageCard = ({item, key}) => {
  return (
    <TouchableOpacity key={key} style={styles.main}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: WP('15'),
    // marginRight: WP('2.3'),
    marginHorizontal: WP('1.5'),
    // paddingVertical: HP('1'),
    paddingBottom: HP('3'),
    // marginVertical: HP('1.5'),
    backgroundColor: colors.white,
  },
  imgContainer: {
    // padding: HP('1.5'),
    // paddingBottom: 10,
    backgroundColor: colors.white,
    // borderRadius: 10,
  },
  image: {
    alignSelf: 'center',
    width: Platform.OS === 'android' ? WP('16') : WP('16'),
    height: Platform.OS === 'android' ? HP('8') : HP('8'),
    borderRadius: 50,
    borderColor: colors.gray,
    borderWidth: 2,
  },
});

export {RoundImageCard};
