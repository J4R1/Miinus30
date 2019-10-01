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
} from 'native-base';
import mediaAPI from '../hooks/ApiHooks';

const ListItem = (props) => {
  const {navigation, singleMedia} = props;
  const {getThumbnail, getTag} = mediaAPI();
  // const file = navigation.state.params.file[0];
  const tn = getThumbnail(singleMedia.file_id);
  const xx = getTag(singleMedia.file_id);

  // console.log('thumbnails', tn);
  return (
    <BaseListItem thumbnail
      style={{
        backgroundColor: '#192224',
        padding: 0, //
        border: 0, //
        margin: 0, //
        flex: 1, //
      }}>
      <Card style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#557b83',
        padding: 0, //
        border: 0, //
        margin: 0, //
      }}>
        <H2 style={{
          textAlign: 'left',
          alignSelf: 'stretch',
        }}>{singleMedia.title}</H2>
        {tn && <Thumbnail square
          style={{
            width: 300,
            height: 300,
            // borderWidth: 1,
            // borderRadius: 30/2
          }}
          source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}} />
        }
        <Body>
          <Text numberOfLines={2}>{singleMedia.description}</Text>
          <Text>{singleMedia.file_id}</Text>
          <H2>{xx}</H2>
        </Body>
        <Button
          style={{
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '75%',
            backgroundColor: '#39aea9', // 2e3e4r
            // gradientBegin: '#000',
            // gradientEnd: '#fff',
            marginBottom: 5,
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#27363b',
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

      </Card>
    </BaseListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
/*
<Right>
        <Button
          onPress={
            () => {
              // console.log('klik');
              navigation.push('Single', {file: singleMedia});
            }
          }
        >
          <Text>View</Text>
        </Button>
      </Right>
*/
