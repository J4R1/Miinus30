/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/LoginHooks';
import mediaAPI from '../hooks/ApiHooks';
import {Content, Container, Card, CardItem, Header, Title, Button, Left, Icon, Right, Body} from 'native-base';
import Constants from 'expo-constants';

const Login = (props) => {
  const [formToggle, setFormToggle] = useState(true);
  const {
    inputs,
    errors,
    handleLoginUsernameChange,
    handleLoginPasswordChange,
    handleUsernameChange,
    handlePasswordChange,
    handleConfirmChange,
    handleEmailChange,
    handleFullnameChange,
    validateOnSend,
    checkUserAvailable,
  } = useSignUpForm();
  const {signInAsync, registerAsync} = mediaAPI();
  return (
    <Container>
      <View style={{
        backgroundColor: '#1c231f', // top
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
            onPress={() => alert('Sign In by entering your \n"Username" and "Password"\n\nOr Register by pressing "REGISTER",\nand fill in your information.')}>
            <Icon name="information-circle-outline" size={30} style={{color: '#fff'}}/>
          </Button></Right>
      </Header>
      <View style={styles.container}>

        {formToggle &&
        <View style={styles.form}>
          <Text style={{color: '#ec1b4b',
            textShadowColor: '#000',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 2,
          }}>Login</Text>
          <FormTextInput
            style={{
              color: '#fff',
            }}
            autoCapitalize='none'
            value={inputs.username}
            placeholder='username'
            placeholderTextColor='#828282'
            maxLength={12}
            onChangeText={handleLoginUsernameChange}
            error={errors.username}
          />
          <FormTextInput
            style={{
              color: '#fff',
            }}
            autoCapitalize='none'
            value={inputs.password}
            placeholder='password'
            placeholderTextColor='#828282'
            maxLength={40}
            onChangeText={handleLoginPasswordChange}
            secureTextEntry={true}
            error={errors.password}
          />
          <Button
            iconLeft
            bordered
            style={{
              marginLeft: 5,
              marginTop: 5,
              backgroundColor: '#27363b',
              borderColor: '#39aea9',
              alignItems: 'center',
            }}
            onPress={() => {
              signInAsync(inputs, props);
            }}
          >
            <Left>
              <Icon active name='log-in' style={{color: '#fff', paddingLeft: 10}}/>
            </Left>
            <Body>
              <Text style={{color: '#6bec1b', textAlign: 'left'}}>SIGN IN!</Text>
            </Body>
            <Right>
            </Right>
          </Button>
          <Text style={{color: '#fff', paddingTop: 5}}>or</Text>
          <Button
            iconLeft
            bordered
            style={{
              marginLeft: 5,
              marginTop: 10,
              backgroundColor: '#27363b',
              borderColor: '#39aea9',
              alignItems: 'center',
            }}
            onPress={() => {
              setFormToggle(false);
            }}
          >
            <Left>
              <Icon active name='list-box' style={{color: '#fff', paddingLeft: 10}}/>
            </Left>
            <Body>
              <Text style={{color: '#ffff00', textAlign: 'left'}}>REGISTER</Text>
            </Body>
            <Right>
            </Right>
          </Button>
        </View>
        }

        {!formToggle &&
        <View style={styles.form}>
          <Text style={{color: '#ec1b4b',
            textShadowColor: '#000',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 2,
          }}>Register</Text>
          <FormTextInput
            style={{
              color: '#fff',
            }}
            autoCapitalize='none'
            value={inputs.username}
            placeholder='username'
            placeholderTextColor='#828282'
            maxLength={12}
            onChangeText={handleUsernameChange}
            onEndEditing={checkUserAvailable}
            error={errors.username}
          />
          <FormTextInput
            style={{
              color: '#fff',
            }}
            autoCapitalize='none'
            value={inputs.password}
            placeholder='password'
            placeholderTextColor='#828282'
            maxLength={40}
            onChangeText={handlePasswordChange}
            error={errors.password}
          />
          <FormTextInput
            style={{
              color: '#fff',
            }}
            autoCapitalize='none'
            value={inputs.confirm}
            placeholder='confirm password'
            placeholderTextColor='#828282'
            maxLength={40}
            onChangeText={handleConfirmChange}
            error={errors.confirm}
          />
          <FormTextInput
            style={{
              color: '#fff',
            }}
            autoCapitalize='none'
            value={inputs.email}
            placeholder='email'
            placeholderTextColor='#828282'
            maxLength={40}
            onChangeText={handleEmailChange}
            error={errors.email}
          />
          <FormTextInput
            style={{
              color: '#fff',
            }}
            value={inputs.fullname}
            placeholder='fullname'
            placeholderTextColor='#828282'
            maxLength={40}
            onChangeText={handleFullnameChange}
          />
          <Button
            iconLeft
            bordered
            style={{
              marginLeft: 5,
              marginTop: 10,
              backgroundColor: '#27363b',
              borderColor: '#39aea9',
              alignItems: 'center',
            }}
            // title='Register!'
            onPress={() => {
              if (validateOnSend()) {
                registerAsync(inputs, props);
              }
            }}
          >
            <Left>
              <Icon active name='list-box' style={{color: '#fff', paddingLeft: 10}}/>
            </Left>
            <Body>
              <Text style={{color: '#ffff00', textAlign: 'left'}}>REGISTER</Text>
            </Body>
            <Right>
            </Right>
          </Button>
          <Text style={{color: '#fff', paddingTop: 5}}>or</Text>
          <Button
            iconLeft
            bordered
            style={{
              marginLeft: 5,
              marginTop: 5,
              backgroundColor: '#27363b',
              borderColor: '#39aea9',
              alignItems: 'center',
            }}
            // title='Login'
            onPress={() => {
              setFormToggle(true);
            }}
          >
            <Left>
              <Icon active name='log-in' style={{color: '#fff', paddingLeft: 10}}/>
            </Left>
            <Body>
              <Text style={{color: '#6bec1b', textAlign: 'left'}}>SIGN IN!</Text>
            </Body>
            <Right>
            </Right>
          </Button>
        </View>
        }
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c231f',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
  },
  form: {
    width: '80%',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
