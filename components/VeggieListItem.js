/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem as BaseListItem,
  Button,
  Left,
  Thumbnail,
  Body,
  Right,
  H2,
  Text,
  Card,
  View,
  CardItem,
} from 'native-base';
import mediaAPI from '../hooks/ApiHooks';

const VeggieListItem = (props) => {
  const {navigation, singleMedia} = props;
  const {getThumbnail, getTag} = mediaAPI();
  // const file = navigation.state.params.file[0];
  const tn = getThumbnail(singleMedia.file_id);
  const xx = getTag(singleMedia.file_id);

  console.log('thumbnails', tn);
  return (
    <BaseListItem thumbnail
      style={{
        backgroundColor: '#00262f',
        padding: 0, //
        border: 0, //
        margin: 0, //
        flex: 1, //
      }}>
      {xx !== 'Example%20tag' &&
      <Card style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#035c6e', //  cardin sisältö
        // padding: 0, //
        // border: 0, //
        // margin: 0, //
      }}>
        <CardItem
          style={{
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#035c6e', // cardin ylätaso
          }}>
          <H2
            style={{
              textAlign: 'left',
              alignSelf: 'stretch',
              fontSize: 20,
              color: '#fff',
              textShadowColor: '#000',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 2,
            }}>{singleMedia.title}</H2>
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
              }}>#{singleMedia.file_id}</H2>
          </Right>
        </CardItem>
        <CardItem style={{
          backgroundColor: '#000',
        }}>
          {tn && <Thumbnail square
            style={{
              flex: 1,
              maxWidth: 300,
              height: 300,
            // borderWidth: 1,
            // borderRadius: 30/2
            }}
            source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w640}} />
          }
        </CardItem>
        <Body
          style={{
            padding: 5,
          }}>
          <Text numberOfLines={2}
            style={{
              color: '#fff',
              fontSize: 15,
            }}>{singleMedia.description}</Text>
          <H2
            style={{
              color: '#ffff00',
              fontSize: 10,
            }}>{xx}</H2>
        </Body>
      </Card>}
    </BaseListItem>
  );
};

VeggieListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default VeggieListItem;
/*

        <Button
          style={{
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '75%',
            backgroundColor: '#3f8994', // 2e3e4r 557b83 39aea9 27363b
            // gradientBegin: '#000',
            // gradientEnd: '#fff',
            marginBottom: 2,
            borderLeftWidth: 2,
            borderBottomWidth: 2,
            borderRightWidth: 2,
            borderTopWidth: 2,
            borderColor: '#212121',
          }}
          raised
          onPress={
            () => {
              navigation.push('Single', {file: singleMedia});
            }
          }
        >
          <Text style={{
            color: '#fff',
            textShadowColor: '#000',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 3,
            // gradientBegin: '#000',
            // gradientEnd: '#fff',
          }}>View</Text>
        </Button>
        */
