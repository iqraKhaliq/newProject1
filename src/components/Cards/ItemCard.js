import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import {colors, HP, WP, size, family, appIcons} from '../../utilities';

const ItemCard = ({item, i, txtSize = size.normal}) => {
  return (
    <TouchableOpacity key={i} style={styles.main}>
      <View style={styles.imgContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.rowContainer}>
        <Text style={[styles.nameStyle, {fontSize: txtSize}]}>
          {item.title}
        </Text>
        <Image source={appIcons.dots} style={styles.smallImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flexDirection: 'column',
  },
  main: {
    width: Dimensions.get('window').width,
    // marginRight: WP('2.3'),
    marginHorizontal: WP('1'),
    paddingVertical: HP('0.5'),
    // ...Platform.select({
    //   ios: {
    //     shadowColor: '#000',
    //     shadowOffset: {
    //       width: 0,
    //       height: 2,
    //     },
    //     shadowOpacity: 0.23,
    //     shadowRadius: 2.62,
    //   },
    //   android: {
    //     elevation: 4,
    //   },
    // }),
    marginBottom: HP('1%'),
    marginTop: Platform.OS === 'android' ? 5 : 0,
    backgroundColor: colors.white,
  },
  imgContainer: {
    // padding: HP('1.5'),
    // paddingBottom: 10,
    backgroundColor: colors.white,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 4.5,
  },
  image: {
    alignSelf: 'center',
    width:
      Platform.OS === 'android'
        ? Dimensions.get('window').width
        : Dimensions.get('window').width,
    height: Platform.OS === 'android' ? HP('20') : HP('19.5'),
  },
  nameStyle: {
    // top: WP('1'),
    // marginBottom: WP('2'),
    color: colors.drakBlack,
    paddingHorizontal: WP('2'),
    fontFamily: family.Poppins_Regular,
  },
  rowContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    // paddingHorizontal: 5,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    paddingHorizontal: WP('2'),
  },
  smallImage: {
    width: WP('3.5'),
    height: WP('3.5'),
    alignSelf: 'center',
  },
});

export {ItemCard};
