import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {colors, family, HP, size, WP} from '../../utilities';

const TitleHeading = ({title}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.main}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
      <Divider style={styles.DividerStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    // marginHorizontal: WP('1'),
    marginVertical: HP('1'),
  },
  main: {
    width: Dimensions.get('window').width,
    marginHorizontal: WP('2'),
    marginVertical: HP('1'),
  },
  textStyle: {
    fontSize: size.normal,
    fontFamily: family.Poppins_Regular,
    color: colors.black,
  },
  DividerStyle: {
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
});

export {TitleHeading};
