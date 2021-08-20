import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import SignUp from './SignUp';

const AuthStacks = createStackNavigator();
export const AuthFlow = ({navigation}) => {
  return (
    <AuthStacks.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <AuthStacks.Screen name="Login" component={Login} />
      <AuthStacks.Screen name="SignUp" component={SignUp} />
    </AuthStacks.Navigator>
  );
};
