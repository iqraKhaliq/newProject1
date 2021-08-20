import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthFlow} from '../screens/AuthFlow';
import TabNavigation from './TabNavigation';
const AppStack = createStackNavigator();
const tabStack = createStackNavigator();

const tabBarStack = () => {
  return (
    <tabStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'tabBar'}>
      <tabStack.Screen name={'tabBar'} component={TabNavigation} />
    </tabStack.Navigator>
  );
};

const MainAppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={'tabBar'}
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Auth'} component={AuthFlow} />
        <AppStack.Screen name={'AppFlows'} component={tabBarStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNavigation;
