import React from 'react';
import {FlatList, SafeAreaView, ScrollView} from 'react-native';
import {
  RoundImageCard,
  StandardHeader,
  TitleHeading,
  TopCard,
  ItemCard,
} from '../../../components';
import {arrayData} from '../../../utilities';
import styles from './styles';

const SubscriptionScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StandardHeader title={'Subscription'} />

      <ScrollView contentContainerStyle={styles.main}>
        <TitleHeading title={'Subscribed Channels'} style={styles.TitleSytle} />

        <FlatList
          data={arrayData.flowers}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, i) => item + i.toString()}
          renderItem={({item, i}) => <RoundImageCard item={item} key={i} />}
        />

        <TitleHeading title={'Recently Viewed'} />

        <FlatList
          data={arrayData.edibles}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, i) => item + i.toString()}
          renderItem={({item, i}) => <TopCard item={item} key={i} />}
        />

        <TitleHeading title={'Recent Uploads'} />

        <FlatList
          data={arrayData.brands}
          showsVerticalScrollIndicator={false}
          vertical
          style={styles.endCard}
          keyExtractor={(item, i) => item + i.toString()}
          renderItem={({item, i}) => <ItemCard item={item} key={i} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;
