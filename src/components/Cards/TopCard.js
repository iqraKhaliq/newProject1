import React from 'react';
import {StyleSheet, Image, Platform, TouchableOpacity} from 'react-native';
import {colors, HP, WP} from '../../utilities';

const TopCard = ({item, key}) => {
  return (
    <TouchableOpacity key={key} style={styles.main}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: WP('20'),
    marginRight: WP('2.3'),
    marginHorizontal: WP('1.5'),
    marginBottom: HP('2'),
    marginTop: Platform.OS === 'android' ? 5 : 0,
    backgroundColor: colors.white,
  },
  imgContainer: {
    // padding: HP('1.5'),
    // paddingBottom: 10,
    backgroundColor: colors.white,
  },
  image: {
    alignSelf: 'center',
    width: Platform.OS === 'android' ? WP('18') : WP('16'),
    height: Platform.OS === 'android' ? HP('10') : HP('10'),
  },
});

export {TopCard};
