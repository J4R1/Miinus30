/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
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
  Header,
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
    <Container style={{backgroundColor: '#00262f'}}>
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
            onPress={() => alert('See your post history by pressing "MY FILES"\n\nAdd or Change your Avatar by pressing "ADD AVATAR"\n\nSign out from your profile by pressing "SIGN OUT"')}>
            <Icon name="information-circle-outline" size={30} style={{color: '#fff'}}/>
          </Button></Right>
      </Header>
      <Content>
        {user &&
        <Card>
          <CardItem style={{backgroundColor: '#035c6e'}}>
            <Left>
              <Icon name='person' style={{
                color: '#6bec1b',
                textShadowColor: '#000',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 2,
              }}/>
              <Body>
                <H2
                  style={{
                    color: '#fff',
                    alignSelf: 'stretch',
                    textAlign: 'left',
                    textShadowColor: '#000',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 2,
                  }}>{user.username}</H2>
                <Text style={{
                  textShadowColor: '#000',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 2,
                  color: '#ffff00'}}>{user.full_name}</Text>
                <Text note style={{color: '#FF8300'}}>{user.email}</Text>
              </Body>
            </Left>
            <Right>
              <Button
                iconRight // 27363b
                bordered
                style={{marginLeft: 5,
                  backgroundColor: '#00262f',
                  borderColor: '#39aea9'}}
                onPress={signOutAsync}
              >
                <Text style={{
                  color: '#ec1b4b',
                  textShadowColor: '#000',
                  textShadowOffset: {width: -2, height: 1},
                  textShadowRadius: 4,
                }}>Sign out</Text>
                <Icon name='log-out' style={{
                  color: '#ec1b4b',
                  textShadowColor: '#000',
                  textShadowOffset: {width: -2, height: 1},
                  textShadowRadius: 4,
                }}/>
              </Button>
            </Right>
          </CardItem>
          <CardItem cardBody style={{backgroundColor: '#1c231f', // ympäröi avatarin 1c231f
          }}>
            <Body>
              <AImage
                source={{uri: getAvatar(user)}}
                style={{
                  borderRadius: 15,
                  width: '100%',
                  height: 200,
                  backgroundColor: '#000',
                  borderColor: '#000',
                }}
                spinnerColor='#b3e5fc'
              />
            </Body>
          </CardItem>
          <CardItem style={{backgroundColor: '#035c6e', // ympäröi buttonit
          }}>
            <Left>
              <Button
                iconRight
                bordered
                style={{marginLeft: 5,
                  backgroundColor: '#00262f',
                  borderColor: '#39aea9'}}
              >
                <Text style={{
                  color: '#FF8300',
                  textShadowColor: '#000',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 3,
                }}>Add avatar</Text>
                <Icon name='add' style={{
                  color: '#FF8300',
                  textShadowColor: '#000',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 3,
                }}/>
              </Button>
            </Left>
            <Right>
              <Button
                iconRight
                bordered
                style={{marginLeft: 5,
                  backgroundColor: '#00262f',
                  borderColor: '#39aea9'}}
                onPress={() => {
                  props.navigation.navigate('MyFiles');
                }}
              >
                <Text style={{
                  color: '#ffff00',
                  textShadowColor: '#000',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 3,
                }}>My files</Text>
                <Icon name='document' style={{
                  color: '#ffff00',
                  textShadowColor: '#000',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 3,
                }}/>
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
