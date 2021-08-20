import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appIcons, colors, family} from '../utilities';

import HomeScreen from '../screens/MainFlow/HomeScreen';
import SubscriptionScreen from '../screens/MainFlow/SubscriptionScreen';
import LibraryScreen from '../screens/MainFlow/LibraryScreen';
import ProfileScreen from '../screens/MainFlow/ProfileScreen';
import SearchScreen from '../screens/MainFlow/SearchScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      swipeEnabled={true}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? appIcons.house : appIcons.houseFocused;
          } else if (route.name === 'Subscription') {
            iconName = focused
              ? appIcons.subscriptionFocused
              : appIcons.subscription;
          } else if (route.name === 'Search') {
            iconName = focused ? appIcons.searchFocused : appIcons.search;
          } else if (route.name === 'Library') {
            iconName = focused ? appIcons.playFocused : appIcons.play;
          } else if (route.name === 'Profile') {
            iconName = focused ? appIcons.Profile : appIcons.Profile;
          }

          return <Image source={iconName} style={styles.imageStyle} />;
        },
        headerShown: false,
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.gray,
        tabBarActiveBackgroundColor: colors.red,
        tabBarLabelPosition: 'below-icon',
        tabBarInactiveBackgroundColor: colors.white,
        tabBarLabelStyle: {
          color: colors.black,
          fontSize: 12,
          fontFamily: family.Poppins_Bold,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name="Subscription" component={SubscriptionScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 35,
    height: 35,
  },
});
