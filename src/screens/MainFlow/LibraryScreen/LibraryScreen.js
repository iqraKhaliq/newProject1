import React from 'react';
import {SafeAreaView, FlatList, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {
  ListItemCard,
  StandardHeader,
  TitleHeading,
  ListCard,
  TopCard,
} from '../../../components';
import {appIcons, arrayData} from '../../../utilities';
import styles from './styles';

const LibraryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StandardHeader title={'Library'} />

      <ScrollView contentContainerStyle={styles.main}>
        <TitleHeading title={'Recent Viewed'} />

        <FlatList
          data={arrayData.featuredDeals}
          showsHorizontalScrollIndicator={false}
          // style={}
          horizontal
          keyExtractor={(item, i) => item + i.toString()}
          renderItem={({item, i}) => <TopCard item={item} key={i} />}
        />

        <Divider style={styles.DividerStyle} />

        <ListItemCard icon={appIcons.preOrderIcon} title={'History'} />
        <ListItemCard icon={appIcons.playIcon} title={'Your Videos'} />
        <ListItemCard icon={appIcons.download} title={'Downloads'} />
        <ListItemCard icon={appIcons.watched} title={'Watch Later'} />
        <ListItemCard icon={appIcons.liked} title={'Liked Videos'} />

        <TitleHeading title={'Playlist'} />

        <FlatList
          data={arrayData.featuredDeals}
          showsVerticalScrollIndicator={false}
          // style={}
          vertical
          keyExtractor={(item, i) => item + i.toString()}
          renderItem={({item, i}) => (
            <ListCard item={item} key={i} title={item.title} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LibraryScreen;
