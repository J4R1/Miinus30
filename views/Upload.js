/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Clipboard} from 'react-native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, ToolbarAndroid} from 'react-native';
import {Form, Body, Right, Button, Text, Content, Spinner, Icon, Card, Left, Header, CardItem} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import PropTypes from 'prop-types';
import useUploadForm from '../hooks/UploadHooks';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Video} from 'expo-av';
import BarcodeScanner from '../views/BarCode';

const Upload = (props) => {
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    inputs,
    handleTitleChange,
    handleDescriptionChange,
    handleUpload,
    resetForm,
    handleTagChange,
  } = useUploadForm();

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      setFile(result);
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  return (
    <Content style={{backgroundColor: '#00262f'}}>
      {loading && <Spinner />}
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
            onPress={() => alert('To Upload Items you need to:\n\n-Select Imagefile by pressing "SELECT IMAGE"\n\n-Have "Title" to be at least 3 characters long\n\n-Have "Description" be at least 6 characters long')}>
            <Icon name="information-circle-outline" size={30} style={{color: '#fff'}}/>
          </Button></Right>
      </Header>

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Card style={{
          width: 201,
          height: 201,
          backgroundColor: '#27363b',
        }}>
          {(file.uri == null) &&
          <Button style={{
            alignItems: 'center',
            width: 200,
            height: 200,
            backgroundColor: '#27363b',
          }}
          onPress={pickImage}>
            <Icon active name='attach' style={{color: '#ffff00'}}/>
            <Left><Text style={{
              color: '#ffff00',
            }}>SELECT IMAGE</Text></Left>
          </Button>
          }
          {file.type === 'image' &&
        <Image
          source={{uri: file.uri}}
          style={{width: 200, height: 200}}
        />
          }
          {file.type === 'video' &&
        <Video
          source={{uri: file.uri}}
          style={{width: 200, height: 200}}
          useNativeControls={true}
        />
          }
        </Card>
      </View>


      {!loading && <Form>
        <FormTextInput
          style={{
            borderColor: '#557b83',
            borderWidth: 1,
            color: '#ec1b4b',
          }}
          selectionColor= 'red' // ios only
          value={inputs.title}
          placeholder='title'
          placeholderTextColor='#ec1b4b'
          // editable='false'
          maxLength={20}
          onChangeText={handleTitleChange}
        />
        <FormTextInput
          style={{
            borderColor: '#557b83',
            borderWidth: 1,
            color: '#ffff00',
          }}
          value={inputs.description}
          placeholder='description'
          placeholderTextColor='#ffff00'
          maxLength={250}
          onChangeText={handleDescriptionChange}
        />
        <FormTextInput
          style={{
            borderColor: '#557b83',
            borderWidth: 1,
            color: '#6bec1b',
          }}
          value={inputs.tag}
          placeholder='tag'
          placeholderTextColor='#6bec1b'
          onChangeText={handleTagChange}
        />
        <View style={{
          flexDirection: 'row',
          marginTop: 5,
          marginBottom: 5,
        }}>

          <Button iconLeft bordered style={{// SELECT Button 39aea9
            marginLeft: 5,
            backgroundColor: '#27363b',
            borderColor: '#39aea9',
          // styles.mb15
          }}
          onPress={pickImage}
          >
            <Icon active name='attach' style={{color: '#ffff00'}}/>
            <Text style={{color: '#ffff00'}}>SELECT</Text>
          </Button>
          {(file.uri == null || inputs.title.length <= 3 || inputs.description.length <= 5) &&
          <Button // UPLOAD Button
            iconLeft
            bordered
            disabled
            style={{marginLeft: 5}}
            onPress={() => {
              console.log('disabled');
            }}
          >
            <Icon active name='add' />
            <Text>UPLOAD</Text>
          </Button>
          }
          {file.uri && inputs.title.length > 3 && (inputs.description.length > 5) && // inputs.description.length == 0 ||(file.uri == null || inputs.description.length <= 5) && (inputs.title.length <= 3 || inputs.description.length <= 5) &&
          <Button // UPLOAD Button
            iconLeft
            bordered // FF8300
            style={{marginLeft: 5,
              backgroundColor: '#27363b',
              borderColor: '#39aea9'}}
            onPress={() => {
              console.log(file);
              handleUpload(file);
              console.log('done');
            }}
          >
            <Icon active name='add' style={{color: '#FF8300'}}/>
            <Text style={{color: '#FF8300'}}>UPLOAD</Text>
          </Button>
          }

          <Button
            iconLeft // ec1b4b
            bordered
            style={{marginLeft: 5,
              backgroundColor: '#27363b',
              borderColor: '#39aea9'}}
            onPress={() => resetForm(setFile)}
          >
            <Icon active name='undo' style={{color: '#ec1b4b'}}/>
            <Text style={{color: '#ec1b4b'}}>RESET</Text>
          </Button>
        </View>

      </Form>
      }
      <BarcodeScanner>
      </BarcodeScanner>
    </Content>

  );
};

Upload.propTypes = {
  navigation: PropTypes.object,
};

export default Upload;
