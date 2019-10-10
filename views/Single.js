/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import AImage from '../components/AsyncImage';
import {Container, Content, Text, Card, CardItem, H2, Body, Right} from 'native-base';
import mediaAPI from '../hooks/ApiHooks';
import {Video} from 'expo-av';

const Single = (props) => {
  const {navigation} = props;
  console.log('Singel navi', navigation.state);
  const file = navigation.state.params.file;
  const {getUserInfo} = mediaAPI();
  return (
    <Container style={{flex: 1, backgroundColor: '#00262f'}}>
      <Content>
        <Card style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#035c6e',
        }}>
          <CardItem style={{backgroundColor: '#035c6e'}}>
            <Body>
              <H2 style={{
                textAlign: 'left',
                alignSelf: 'stretch',
                fontSize: 20,
                color: '#fff',
                textShadowColor: '#000',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 2,
              }}>{file.title}</H2>
              <Text note style={{color: '#fff'}}>by: {getUserInfo(file.user_id).username}</Text>
            </Body>
            <Right>
              <H2
                style={{
                  textAlign: 'right',
                  alignSelf: 'stretch',
                  fontSize: 15,
                  color: '#ec1b4b',
                  textShadowColor: '#000',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 2,
                }}>#{file.file_id}</H2>
            </Right>
          </CardItem>
          <CardItem style={{backgroundColor: '#1c231f'}}>
            <Body>
              {file.media_type === 'image' &&
              <AImage
                source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + file.filename}}
                style={{
                  // borderRadius: 50,
                  width: '100%',
                  height: 300,
                }}
                spinnerColor='#b3e5fc'
              />
              }
              {file.media_type === 'video' &&
              <Video source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + file.filename}}
                style={{
                  width: '100%',
                  height: 300,
                }}
                useNativeControls={true}
              />
              }
            </Body>
          </CardItem>
          <CardItem style={{backgroundColor: '#035c6e'}}>
            <Text numberOfLines={2}
              style={{
                color: '#39aea9',
                fontSize: 15,
              }}>{file.description}</Text>
          </CardItem>
          <Text style={{paddingBottom: 5}} note>{file.time_added}</Text>
        </Card>
      </Content>
    </Container>
  );
};


Single.propTypes = {
  navigation: PropTypes.object,
  file: PropTypes.object,
};

export default Single;
