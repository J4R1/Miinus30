/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
// import {StyleSheet, SafeAreaView} from 'react-native';
// import List from '../components/List';
import VeggieList from '../components/VeggieList';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';
import {Content, Container, Card, CardItem, Header, Title, Text, Left, Icon, Right} from 'native-base';
import {View, ToolbarAndroid} from 'react-native';
import Constants from 'expo-constants';


const Veggie = (props) => {
  const {navigation} = props;
  const {userToContext} = mediaAPI();
  console.log('Home.js Home(props)');
  userToContext();
  console.log('Home.js getUserFromToken done');
  return (
    <Container
      style={{backgroundColor: '#00262f'}} // kaikkein reunin
    >
      <View style={{
        backgroundColor: '#00262f', // top
        height: Constants.statusBarHeight,
      }} />
      <Header // # text color
        style={{
          backgroundColor: '#044c58', // header Color='#39aea9' 27363b 🛒🟨 🟩 🟥 🟧 ♻️ ⚔️💎💶
          // height: 60,
          paddingBottom: 3,
          maringBottom: 3,
          borderBottomColor: '#3f8994',
          borderBottomWidth: 1,
        }}>
        <Left>
          <Icon
            style={{
              color: '#ec1b4b',
              textShadowColor: '#000',
              textShadowOffset: {width: -2, height: 2},
              textShadowRadius: 4,
            }}
            name= 'pricetags'
            size={30}
          />
        </Left>
        <Text
          style={{
            flex: 1,
            fontSize: 34,
            color: '#fff',
            alignSelf: 'stretch',
            textAlign: 'left',
            textShadowColor: '#000',
            textShadowOffset: {width: -2, height: 2},
            textShadowRadius: 4,
            marginRight: 0,
            paddingRight: 0,
            borderRightWidth: 0,
          }}
        >    Miinus</Text>
        <Text
          style={{
            flex: 1,
            fontSize: 34,
            color: '#ec1b4b',
            alignSelf: 'stretch',
            textAlign: 'left',
            textShadowColor: '#000',
            textShadowOffset: {width: -2, height: 2},
            textShadowRadius: 4,
            marginLeft: 0,
            paddingLeft: 0,
            borderLeftWidth: 0,
          }}
        >-30</Text>
      </Header>
      <Right></Right>
      <VeggieList navigation={navigation}></VeggieList>
    </Container>
  );
};

Veggie.propTypes = {
  navigation: PropTypes.object,
};

export default Veggie;

