import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {colors, family, HP, size, WP} from '../../utilities';

const ListCard = ({item, key, title}) => {
  return (
    <TouchableOpacity key={key} style={styles.main}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.txtStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: WP('20'),
    marginRight: WP('2.3'),
    marginHorizontal: WP('2'),
    marginBottom: HP('2'),
    marginTop: Platform.OS === 'android' ? 5 : 0,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    // padding: HP('1.5'),
    // paddingBottom: 10,
    backgroundColor: colors.white,
    marginLeft: WP('3'),
  },
  image: {
    alignSelf: 'center',
    width: Platform.OS === 'android' ? WP('18') : WP('16'),
    height: Platform.OS === 'android' ? HP('10') : HP('10'),
  },
  txtStyle: {
    marginLeft: WP('3'),
    fontFamily: family.Poppins_Medium,
    fontSize: size.medium,
    color: colors.black,
  },
});

export {ListCard};
