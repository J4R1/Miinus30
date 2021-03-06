import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

const bootstrapAsync = async (props) => {
  async function getToken() {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log('token', userToken);
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  }
  useEffect(() => {
    getToken();
  }, []);
};

const AuthLoadingScreen = (props) => {
  bootstrapAsync(props);
  return (
    <View>
      <ActivityIndicator />
      <StatusBar backgroundColor="blue" barStyle="light-content" />
    </View>
  );
};

export default AuthLoadingScreen;
// barStyle="default"
