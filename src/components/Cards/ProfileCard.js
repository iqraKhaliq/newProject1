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

const ProfileCard = ({image, name}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.main}>
        <Image source={image} style={styles.imageStyle} />
        <Text style={styles.nameStyle}>{name}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.main}>
        <Text style={styles.coloredText}>Manage Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: colors.white,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    marginHorizontal: WP('5'),
    paddingVertical: HP('1'),
    alignContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: WP('20'),
    height: HP('10'),
    borderRadius: 10 / 4,
  },
  nameStyle: {
    fontFamily: family.Poppins_Medium,
    color: colors.black,
    fontSize: size.h2,
    marginLeft: WP('2'),
  },
  coloredText: {
    fontFamily: family.Poppins_Regular,
    color: colors.lightBlue,
    fontSize: size.medium,
  },
  dividerStyle: {
    borderWidth: 1,
    borderColor: colors.silver,
  },
});

export {ProfileCard};
