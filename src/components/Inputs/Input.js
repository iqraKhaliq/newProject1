import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import {colors, family, HP, WP} from '../../utilities';

const Input = ({
  placeholder,
  leftIcon,
  rightIcon,
  placeholderTextColor = colors.black,
  autoCapitalize,
  value,
  style,
  onChangeText,
  secureTextEntry,
  onlyInput = true,
  multiline = false,
  onlyInputWithRight = false,
  keyboardType,
  reference,
  onSubmitEditing,
  returnKeyType,
  editable = true,
  onChange,
  width,
  fontSize,
  numberOfLines,
  onFocus,
}) => {
  return (
    <View
      style={[
        styles.inputContainerStyle,
        {
          width,
          height: multiline ? HP(18) : 50,
          alignItems: multiline ? 'flex-start' : 'center',
        },
        style,
      ]}>
      {!onlyInput && (
        <View
          style={[
            styles.leftIconCotnainer,
            {
              marginTop: multiline ? WP('3') : 0,
            },
          ]}>
          {leftIcon}
        </View>
      )}
      <View style={styles.body}>
        <TextInput
          clearTextOnFocus={true}
          onChangeText={onChangeText}
          placeholder={placeholder}
          ref={reference}
          onFocus={onFocus}
          editable={editable}
          onChange={onChange}
          numberOfLines={numberOfLines}
          placeholderTextColor={placeholderTextColor}
          value={value}
          returnKeyType={returnKeyType}
          enablesReturnKeyAutomatically
          multiline={multiline}
          autoCapitalize={'none'}
          onSubmitEditing={onSubmitEditing}
          autoCorrect
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={[
            styles.input,
            {
              right: onlyInput ? WP(-4) : onlyInputWithRight ? WP(7) : WP(3),
              marginTop: multiline ? WP('2') : 0,
              fontSize,
            },
          ]}
        />
      </View>
      {!onlyInput && <View style={styles.rightIconContainer}>{rightIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    padding: 0,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginVertical: HP(2),
    height: HP(5),
    borderWidth: 1,
    borderRadius: HP('6'),
    backgroundColor: colors.white,
    borderColor: colors.p1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: WP(2),
    padding: 0,
    margin: 0,
    borderBottomWidth: 0,
    color: colors.input,
    fontFamily: family.Poppins_Regular,
    right: WP(3),
    flex: 0.8,
  },
  leftIconCotnainer: {
    flex: 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: WP('2'),
  },
  body: {
    flex: 0.8,
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? HP('0.5') : HP('0.2'),
  },
  rightIconContainer: {
    flex: 0.19,
    right: WP('2'),
  },
});

export {Input};
