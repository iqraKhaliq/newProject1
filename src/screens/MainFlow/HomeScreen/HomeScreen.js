import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {ItemCard, StandardHeader} from '../../../components';
import {arrayData} from '../../../utilities';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StandardHeader title={'Home'} />
      <FlatList
        data={arrayData.brands}
        showsVerticalScrollIndicator={false}
        // style={}
        vertical
        keyExtractor={(item, i) => item + i.toString()}
        renderItem={({item, i}) => <ItemCard item={item} key={i} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
