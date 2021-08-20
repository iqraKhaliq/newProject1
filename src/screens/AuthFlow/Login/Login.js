import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Input} from '../../../components';
import {colors} from '../../../utilities';
import styles from './styles';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Input
            placeholder={'UserName or Email Address'}
            placeholderTextColor={colors.darkGray}
            width={'80%'}
            keyboardType="email-address"
          />
          <Input
            placeholder={'Password'}
            placeholderTextColor={colors.darkGray}
            width={'80%'}
            secureTextEntry
          />
          <Button
            title={'Login'}
            titleColor={colors.white}
            backgroundColor={colors.red}
            width={'80%'}
            onSubmit={() => navigation.navigate('AppFlows', {screen: 'Home'})}
          />
        </View>

        <TouchableOpacity
          style={styles.viewBottom}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.SimpleText}>Don't have an account? </Text>
          <Text style={styles.ColoredText}>SignUp</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
