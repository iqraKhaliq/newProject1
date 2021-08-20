import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {appRadius, colors, family, size, HP} from '../../utilities';

const Button = ({
  title,
  titleStyle,
  titleColor,
  backgroundColor,
  style,
  width,
  onSubmit,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, style, {backgroundColor, width}]}
      onPress={onSubmit}
      activeOpacity={0.9}>
      <Text style={[styles.styleTextButton, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.red,
    borderRadius: appRadius.buttonRadius,
    justifyContent: 'center',
    alignContent: 'center',
    height: HP('6'),
  },
  styleTextButton: {
    color: colors.white,
    fontFamily: family.Poppins_Medium,
    fontSize: size.medium,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export {Button};
