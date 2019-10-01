import React, {useContext} from 'react';
import {AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
import {
  Icon,
  Container,
  Content,
  Text,
  Button,
  Card,
  CardItem,
  Left,
  H2,
  Body,
  Right,
} from 'native-base';
import mediaAPI from '../hooks/ApiHooks';
import AImage from '../components/AsyncImage';
import {MediaContext} from '../contexts/MediaContext';
import {View, ToolbarAndroid} from 'react-native';
import Constants from 'expo-constants';

const Profile = (props) => {
  const {user} = useContext(MediaContext);
  console.log('ret user', user);
  const {getAvatar} = mediaAPI();
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };
  return (
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
      <Content>
        {user &&
        <Card>
          <CardItem>
            <Left>
              <Icon name='person' />
              <Body>
                <H2>{user.username}</H2>
                <Text>{user.full_name}</Text>
                <Text note>{user.email}</Text>
              </Body>
            </Left>
            <Right>
              <Button
                iconRight
                onPress={signOutAsync}
              >
                <Text>Sign out</Text>
                <Icon name='log-out' />
              </Button>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Body>
              <AImage
                source={{uri: getAvatar(user)}}
                style={{
                  borderRadius: 50,
                  width: '100%',
                  height: 200,
                }}
                spinnerColor='#b3e5fc'
              />
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button
                iconRight
              >
                <Text>Add avatar</Text>
                <Icon name='add' />
              </Button>
            </Left>
            <Right>
              <Button
                iconRight
                onPress={() => {
                  props.navigation.navigate('MyFiles');
                }}
              >
                <Text>My files</Text>
                <Icon name='document' />
              </Button>
            </Right>
          </CardItem>
        </Card>
        }
      </Content>
    </Container>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
