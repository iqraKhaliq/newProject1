import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
// import {Icon} from 'react-native-elements';
import {WP, HP, colors, family, size, appIcons} from '../../utilities';
import {Input} from '../Inputs/InputS';

const SearchHeader = ({
  title,
  allSearchText,
  onChangeSearchAll,
  onSubmitEditing = () => {},
  returnKeyType,
  placeholder = 'Search ...',
}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Input
          placeholder={placeholder}
          width={'100%'}
          onlyInput={false}
          multiline={false}
          onSubmitEditing={onSubmitEditing}
          fontSize={size.xtiny}
          value={allSearchText}
          returnKeyType={returnKeyType}
          onChangeText={text => onChangeSearchAll(text)}
          style={styles.searchInput}
          leftIcon={
            <Image source={appIcons.search} style={{height: 25, width: 25}} />
          }
          placeholderTextColor={colors.input}
          rightIcon={
            <Image source={appIcons.cancel} style={{height: 25, width: 25}} />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: WP('100%'),
    height: HP('15'),
    backgroundColor: colors.red,
    paddingVertical: HP('1'),
  },
  title: {
    left: WP('2'),
    fontFamily: family.Poppins_Medium,
    color: colors.white,
    fontSize: size.medium,
  },
  searchInput: {
    borderRadius: 10,
    height: HP('6'),
    fontSize: size.tiny,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: WP('5'),
    justifyContent: 'space-between',
  },
});

export {SearchHeader};
