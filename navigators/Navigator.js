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
import Search from '../views/Scan';
import Global from '../views/Global';
import MyFiles from '../views/MyFiles';
import Testi2 from '../views/Testi2';
import Meat from '../views/Meat';
import Veggie from '../views/Veggie';
import Baked from '../views/Baked';
// import MyFiles from '../views/MyFiles';


const TabNavigator = createBottomTabNavigator(
    {
      Home,
      Search,
      Upload,
      // BarcodeScanner,
      // Testi,
      Profile,
      // Testi2,
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
                color: '#FF8300',
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
          } else if (routeName === 'Search') {
            iconName = 'search'; // barcode
            return <Icon
              style={{
                // height: 40,
                // paddingLeft: 0,
                // paddingRight: 0,
                // paddingTop: 0,
                // paddingBottom: 0,
                color: '#ffff00',
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
        activeTintColor: '#00cdcd', // selected text, brighter than before 7db3bd
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
          height: 80, // label height
          backgroundColor: '#1c231f', // bottom tab color
          // borderColor: '#fff',
          // borderRadius: 1,
          borderLeftWidth: 1,
          borderLeftColor: '#424242',
          borderRightWidth: 1,
          borderRightColor: '#424242',
          borderTopWidth: 1,
          borderTopColor: '#424242',
          borderBottomWidth: 1,
          borderBottomColor: '#424242',
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
        navigationOptions: {
          title: 'Miinus-30',
          headerStyle: {
            backgroundColor: '#044c58', // header color
            // color: 'blue', // ei tee mitään
            // borderBottomColor: '#2F95D6',
            // borderBottomWidth: 3,
            elevation: null},
          // titleStyle: {
          // color: '#eee311',
          // backgroundColor: 'green',
          // },
          headerTitleStyle: {
            fontSize: 30,
            color: 'white',
            textShadowColor: '#000',
            textShadowOffset: {width: -2, height: 2},
            textShadowRadius: 4,
            // fontSize: 18,
          },
          headerTintColor: '#ec1b4b', // nuoli
        },
      },
      MyFiles: {
        screen: MyFiles,
        navigationOptions: {
          title: 'Miinus-30',
          headerStyle: {
            backgroundColor: '#044c58', // header color
            // color: 'blue', // ei tee mitään
            // borderBottomColor: '#2F95D6',
            // borderBottomWidth: 3,
            elevation: null},
          // titleStyle: {
          // color: '#eee311',
          // backgroundColor: 'green',
          // },
          headerTitleStyle: {
            fontSize: 30,
            color: 'white',
            textShadowColor: '#000',
            textShadowOffset: {width: -2, height: 2},
            textShadowRadius: 4,
            // fontSize: 18,
          },
          headerTintColor: '#ec1b4b', // nuoli
        },
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
      Testi2: { // <--
        screen: Testi2,
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
