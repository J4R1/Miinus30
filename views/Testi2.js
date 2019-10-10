/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body,
  View,
  Text,
  Item,
  Input,
  Content,
} from 'native-base';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
// import Home from './tabOne';
import MeatList from '../components/MeatList';
import VeggieList from '../components/VeggieList';
import BakedList from '../components/BakedList';
import Meat from '../views/Meat';
import Veggie from '../views/Veggie';
import Baked from '../views/Baked';
// import TabTwo from './tabTwo';
// import TabThree from './tabThree';
import Testi from '../views/Testi';
console.disableYellowBox = true;
import mediaAPI from '../hooks/ApiHooks';


const Testi2 = (props) => {
  const {navigation} = props;
  const {userToContext} = mediaAPI();
  console.log('Home.js Home(props)');
  userToContext();
  console.log('Home.js getUserFromToken done');
  return (
    <Container style={{
      backgroundColor: '#00262f',
    }} >
      <View style={{
        backgroundColor: '#00262f', // top
        height: Constants.statusBarHeight,
      }} />
      <Header hasTabs style={{
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
      <Header searchBar rounded style={{
        backgroundColor: '#044c58',
        paddingBottom: 3,
        maringBottom: 3,
        borderBottomColor: '#3f8994',
        borderBottomWidth: 1,
      }}>
        <Item>
          <Icon active name="search" />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>

      <Tabs tabBarUnderlineStyle={{borderBottomWidth: 2}}
      >
        <Tab heading="🥩 Meats 🍗"
          tabStyle={{backgroundColor: '#1c231f'}}
          textStyle={{color: '#557b83'}}
          activeTabStyle={{backgroundColor: '#27363b'}}
          activeTextStyle={{color: '#7db3bd', fontWeight: 'normal'}}>
          <MeatList/>
        </Tab>
        <Tab heading="🥑 Veggies 🥕"
          tabStyle={{backgroundColor: '#1c231f'}}
          textStyle={{color: '#557b83'}}
          activeTabStyle={{backgroundColor: '#27363b'}}
          activeTextStyle={{color: '#7db3bd', fontWeight: 'normal'}}>
          <VeggieList/>
        </Tab>
        <Tab heading="🍞 Baked 🥨"
          tabStyle={{backgroundColor: '#1c231f'}}
          textStyle={{color: '#557b83'}}
          activeTabStyle={{backgroundColor: '#27363b'}}
          activeTextStyle={{color: '#7db3bd', fontWeight: 'normal'}}>
          <BakedList/>
        </Tab>
      </Tabs>
    </Container>
  );
};
Testi2.propTypes = {
  navigation: PropTypes.object,
};
export default Testi2;
