import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HP} from '../../utilities';

const Spacer = ({ratio}) => (
  <View style={[styles.spacer, {marginVertical: HP(`${ratio}`)}]} />
);

const styles = StyleSheet.create({
  spacer: {
    marginVertical: HP('8'),
  },
});

export {Spacer};
