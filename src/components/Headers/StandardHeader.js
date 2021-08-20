import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {WP, HP, colors, family, size} from '../../utilities';

const StandardHeader = ({title}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: WP('100%'),
    height: HP('7'),
    backgroundColor: colors.red,
    paddingVertical: HP('2'),
  },
  title: {
    left: WP('2'),
    fontFamily: family.Poppins_Medium,
    color: colors.white,
    fontSize: size.medium,
  },
});

export {StandardHeader};
