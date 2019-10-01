/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// navigators/Navigator.js
/* eslint-disable react/display-name */
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Single from '../views/Single';
import AuthLoading from '../views/AuthLoading';
import Login from '../views/Login';
import Upload from '../views/Upload';
import {Icon} from 'native-base';
import BarcodeScanner from '../views/BarCode';
import Testi from '../views/Testi';
import Scan from '../views/Scan';
import Global from '../views/Global';
import MyFiles from '../views/MyFiles';

// import MyFiles from '../views/MyFiles';


const TabNavigator = createBottomTabNavigator(
    {
      Home,
      Scan,
      Upload,
      // BarcodeScanner,
      // Testi,
      Profile,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ( focused, horizontal, tintColor ) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'home';
            return <Icon
              style={{
                // height: 40,
                // paddingLeft: 0,
                // paddingRight: 0,
                // paddingTop: 0,
                // paddingBottom: 0,
                color: '#6bec1b',
                // borderLeftWidth: 2,
                // borderLeftColor: '#eee311',
                // borderRightWidth: 2,
                // borderRightColor: '#eee311',
                // borderTopWidth: 2,
                // borderTopColor: '#eee311',
                // borderBottomWidth: 2,
                // borderBottomColor: '#eee311',
                // position: 'center',
              }}
              name={iconName}
              size={25}
            />;
          } else if (routeName === 'Upload') {
            iconName = 'add-circle';
            return <Icon
              style={{
                // height: 40,
                // paddingLeft: 0,
                // paddingRight: 0,
                // paddingTop: 0,
                // paddingBottom: 0,
                color: '#f26a44',
                // borderLeftWidth: 2,
                // borderLeftColor: '#eee311',
                // borderRightWidth: 2,
                // borderRightColor: '#eee311',
                // borderTopWidth: 2,
                // borderTopColor: '#eee311',
                // borderBottomWidth: 2,
                // borderBottomColor: '#eee311',
                // position: 'center',
              }}
              name={iconName}
              size={25}
            />;
          } else if (routeName === 'Scan') {
            iconName = 'search'; // barcode
            return <Icon
              style={{
                // height: 40,
                // paddingLeft: 0,
                // paddingRight: 0,
                // paddingTop: 0,
                // paddingBottom: 0,
                color: '#f7db69',
                // borderLeftWidth: 2,
                // borderLeftColor: '#eee311',
                // borderRightWidth: 2,
                // borderRightColor: '#eee311',
                // borderTopWidth: 2,
                // borderTopColor: '#eee311',
                // borderBottomWidth: 2,
                // borderBottomColor: '#eee311',
                // position: 'center',
              }}
              name={iconName}
              size={25}
            />;
          } else if (routeName === 'Profile') {
            iconName = 'person';
            return <Icon
              style={{
                // height: 40,
                // paddingLeft: 0,
                // paddingRight: 0,
                // paddingTop: 0,
                // paddingBottom: 0,
                color: '#ec1b4b',
                // borderLeftWidth: 2,
                // borderLeftColor: '#eee311',
                // borderRightWidth: 2,
                // borderRightColor: '#eee311',
                // borderTopWidth: 2,
                // borderTopColor: '#eee311',
                // borderBottomWidth: 2,
                // borderBottomColor: '#eee311',
                // position: 'center',
              }}
              name={iconName}
              size={25}
            />;
          }
        },
      }),
      tabBarOptions: {
        activeTintColor: '#39aea9', // selected text
        inactiveTintColor: '#557b83', // inactive tab, bright blue 9DE0AD
        labelStyle: {
          // height: 60,
          // fontStyle: 'italic',
          fontSize: 14,
          backgroundColor: '#27363b', // transparent
          // height: 100, ei huvä
          // borderRightColor: '#fff',
          // borderRightWidth: 1,
          // borderLeftColor: '#fff',
          // borderLeftWidth: 1,
          // borderBottomColor: '#fff',
          // borderLeftWidth: 2,
          // borderTopColor: '#eee311',
          // borderRadius: 30,
        },
        style: {
          height: 60, // label height
          backgroundColor: '#1c231f', // bottom tab color
          // borderColor: '#fff',
          borderLeftWidth: 2,
          borderLeftColor: '#000',
          borderRightWidth: 2,
          borderRightColor: '#000',
          borderTopWidth: 2,
          borderTopColor: '#000',
          borderBottomWidth: 2,
          borderBottomColor: '#000',
        },
      },
    }
);

const StackNavigator = createStackNavigator(
    {
      Home: {
        screen: TabNavigator,
        navigationOptions: {
          header: null, // this will hide the header
        },
      },
      Single: {
        screen: Single,
      },
      MyFiles: {
        screen: MyFiles,
      },
      Logout: {
        screen: Login,
      },
      Upload: { // <--
        screen: Upload,
      },
      Profile: { // <--
        screen: Profile,
      },
    },
);

const Navigator = createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: StackNavigator,
      Auth: Login,
    },
    {
      initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(Navigator);
