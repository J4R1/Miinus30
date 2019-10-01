/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
// import {StyleSheet, SafeAreaView} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';
import {Content, Container, Card, CardItem, Header, Title, Text, Left, Icon, Right} from 'native-base';
import {View, ToolbarAndroid} from 'react-native';
import Constants from 'expo-constants';


const Home = (props) => {
  const {navigation} = props;
  const {userToContext} = mediaAPI();
  console.log('Home.js Home(props)');
  userToContext();
  console.log('Home.js getUserFromToken done');
  return (
    <Container
      style={{backgroundColor: '#1c231f'}} // kaikkein reunin
    >
      <View style={{
        backgroundColor: '#1c231f', // top
        height: Constants.statusBarHeight,
      }} />
      <Header // # text color
        style={{
          backgroundColor: '#27363b', // header Color='#39aea9' 27363b 🛒🟨 🟩 🟥 🟧 ♻️ ⚔️💎💶
          // height: 60,
          paddingBottom: 3,
          maringBottom: 3,
          borderBottomColor: '#1c231f',
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
      <List navigation={navigation}></List>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;

/*
<Container>
      <View style={{
        backgroundColor: '#1c231f', // top
        height: Constants.statusBarHeight,
      }} />
      <ToolbarAndroid // # text color
        style={{
          backgroundColor: '#27363b', // header
          height: 56,
          alignSelf: 'stretch',
          textAlign: 'center',
        }}
        title='Miinus30'
        titleColor='#39aea9'/>
      <Content style={{
        backgroundColor: '#000',
        padding: 0,
      }}>
        <Card>
          <CardItem style={{backgroundColor: '#27363b'}}>
            <List navigation={navigation}></List>
          </CardItem>
        </Card>
      </Content>
    </Container>


          color: '#fff',
          textShadowColor: '#000',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 3,

*/
