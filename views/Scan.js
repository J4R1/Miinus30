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
import MeatList from '../components/MeatList';
import VeggieList from '../components/VeggieList';
import BakedList from '../components/BakedList';
import Meat from '../views/Meat';
import Veggie from '../views/Veggie';
import Baked from '../views/Baked';
import Testi from '../views/Testi';
import Home from '../views/Home';

console.disableYellowBox = true;

class Search extends Component {
  render() {
    return (
      <Container style={{
        backgroundColor: '#00262f',
      }} >
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
          <Left style={{maxWidth: '10%'}}>
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
          <Body style={{flexDirection: 'row'}}>
            <Text
              style={{
              // flex: 1,
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
              // flex: 1,
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
            >-30</Text></Body>
          <Right>
            <Button transparent
              onPress={() => alert('Search items by typing keywords to the search field, and press 🔍\n\nSelect different Category by \nclicking the different Tab options\nYou can also swipe to switch tabs')}>
              <Icon name="information-circle-outline" size={30} style={{color: '#fff'}}/>
            </Button></Right>
        </Header>
        <Header searchBar rounded style={{
          backgroundColor: '#044c58',
          paddingBottom: 3,
          maringBottom: 3,
          borderBottomColor: '#3f8994',
          borderBottomWidth: 1,
        }}>
          <Item style={{minWidth: '55%'}}>
            <Icon active name="search" />
            <Input placeholder="Search" />
          </Item>

          <Right style={{alignSelf: 'flex-end'}}>
            <Button bordered rounded style={{borderColor: '#ffff00'}}
              onPress={() => alert('Search function is under maintenance')}>
              <Icon name="search" style={{color: '#ffff00'}}/>
            </Button>
          </Right>
        </Header>

        <Tabs tabBarUnderlineStyle={{borderBottomWidth: 2}}
        >
          <Tab heading="🥩 Meats 🍗"
            tabStyle={{backgroundColor: '#1c231f'}}
            textStyle={{color: '#557b83'}}
            activeTabStyle={{backgroundColor: '#27363b'}}
            activeTextStyle={{color: '#00cdcd', fontWeight: 'normal'}}>
            <MeatList/>
          </Tab>
          <Tab heading="🥑 Veggies 🥕"
            tabStyle={{backgroundColor: '#1c231f'}}
            textStyle={{color: '#557b83'}}
            activeTabStyle={{backgroundColor: '#27363b'}}
            activeTextStyle={{color: '#00cdcd', fontWeight: 'normal'}}>
            <VeggieList/>
          </Tab>
          <Tab heading="🍞 Baked 🥨"
            tabStyle={{backgroundColor: '#1c231f'}}
            textStyle={{color: '#557b83'}}
            activeTabStyle={{backgroundColor: '#27363b'}}
            activeTextStyle={{color: '#00cdcd', fontWeight: 'normal'}}>
            <BakedList/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Search;
