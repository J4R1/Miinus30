/* eslint-disable max-len */
import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {
  ListItem as BaseListItem,
  Button,
  Left,
  Thumbnail,
  Body,
  H2,
  Text,
  View,
  Card,
  CardItem,
  Icon,
} from 'native-base';
import mediaAPI from '../hooks/ApiHooks';
import {MediaContext} from '../contexts/MediaContext';

const MyFilesListItem = (props) => {
  const {setMedia, setMyMedia} = useContext(MediaContext);
  const {navigation, singleMedia} = props;
  const {getThumbnail, deleteMedia, getTag} = mediaAPI(); // gettag

  const tn = getThumbnail(singleMedia.file_id);
  const xx = getTag(singleMedia.file_id);
  // console.log('thumbnails', tn);
  return (
    <BaseListItem thumbnail style={{flex: 1, width: '99%', left: -17}}>
      <View style={{
        backgroundColor: '#044c58',
        flex: 1,
        width: '100%',
        borderColor: '#818181',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 5,
      }}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#044c58',
        }}>
          <Card style={{
            width: 261,
            height: 261,
            backgroundColor: '#fff',
          }}>
            <CardItem style={{
              alignItems: 'center',
              flex: 1,
              width: 260,
              height: 260,
              backgroundColor: '#000',
            }}>
              {tn && <Thumbnail square
                style={{
                  flex: 1,
                  width: 250,
                  height: 250,
                }} source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w640}} />
              }
            </CardItem>
          </Card>
        </View>


        <Body style={{backgroundColor: '#044c58'}}>
          <Left>
            <View style={{
              flexDirection: 'row',
            }}><H2 style={{color: '#fff'}}>Title: </H2><H2 style={{color: '#ffff00'}}>{singleMedia.title}</H2>
            </View>
            <View style={{
              flexDirection: 'row',
            }}><Text numberOfLines={2} style={{color: '#fff'}}>Description: </Text><Text style={{color: '#FF8300'}} numberOfLines={2}>{singleMedia.description}</Text>
            </View>
            <View style={{
              flexDirection: 'row',
            }}><Text style={{color: '#fff'}}>Tag: </Text><Text style={{color: '#39aea9'}}>{xx}</Text>
            </View>
          </Left>
        </Body>

        <View style={{
          flexDirection: 'row',
          marginTop: 5,
          marginBottom: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button iconLeft bordered style={{
            backgroundColor: '#00262f',
            borderColor: '#39aea9',
            marginRight: 5}}
          onPress={
            () => {
              console.log('klik');
              navigation.push('Single', {file: singleMedia});
            }
          }
          >
            <Icon active name='eye' style={{color: '#fff'}}/>
            <Text style={{color: '#6bec1b',
              textShadowColor: '#000',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 2,
            }}>View</Text>
          </Button>
          <Button iconRight bordered style={{
            backgroundColor: '#00262f',
            borderColor: '#39aea9',
            // marginRight: 5,
          }}
          onPress={
            () => {
              console.log('press');
              deleteMedia(singleMedia, setMyMedia, setMedia);
            }
          }
          >
            <Text style={{color: '#ec1b4b',
              textShadowColor: '#000',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 2,
            }}>Delete</Text>
            <Icon active name='trash' style={{color: '#fff'}}/>
          </Button>
        </View>
      </View>
    </BaseListItem>
  );
};

MyFilesListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default MyFilesListItem;
