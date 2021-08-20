import React from 'react';
import {SafeAreaView} from 'react-native';
import {Divider} from 'react-native-elements';
import {ListItemCard, ProfileCard, StandardHeader} from '../../../components';
import {appIcons} from '../../../utilities';
import styles from './styles';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StandardHeader title={'Profile'} />
      
      <ProfileCard image={appIcons.Profile} name={'Iqra Khaliq'} />
      <ListItemCard icon={appIcons.addAccount} title={'Add Account'} />
      <Divider style={styles.dividerStyle} />

      <ListItemCard icon={appIcons.yourChannel} title={'Your Channel'} />
      <ListItemCard icon={appIcons.brandsIcon} title={'Studio'} />
      <ListItemCard icon={appIcons.watched} title={'Time Watched'} />
      <ListItemCard icon={appIcons.purchase} title={'Purchases'} />
      <ListItemCard icon={appIcons.yourData} title={'Your Data'} />
      <Divider style={styles.dividerStyle} />

      <ListItemCard icon={appIcons.settingIcon} title={'Settings'} />
      <ListItemCard icon={appIcons.help} title={'Help'} />

    </SafeAreaView>
  );
};

export default ProfileScreen;
