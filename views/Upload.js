/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, ToolbarAndroid} from 'react-native';
import {Form, Button, Text, Content, Spinner, Icon, Card} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import PropTypes from 'prop-types';
import useUploadForm from '../hooks/UploadHooks';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Video} from 'expo-av';

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
    <Content>
      {loading && <Spinner />}
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

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Card style={{
          width: 200,
          height: 200,
        }}>
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
          value={inputs.title}
          placeholder='title'
          onChangeText={handleTitleChange}
        />
        <FormTextInput
          value={inputs.description}
          placeholder='description'
          onChangeText={handleDescriptionChange}
        />
        <FormTextInput
          value={inputs.tag}
          placeholder='tag'
          onChangeText={handleTagChange}
        />
        <View style={{
          flexDirection: 'row',
          marginTop: 5,
          marginBottom: 5,
        }}>

          <Button iconLeft bordered style={{// SELECT Button
            marginLeft: 5,
            backgroundColor: '#d0c218',
            borderColor: '#000',
          // styles.mb15
          }}
          onPress={pickImage}
          >
            <Icon active name='attach' />
            <Text style={{color: '#eee311'}}>SELECT</Text>
          </Button>
          {(file.uri == null || inputs.title.length < 3) &&
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
          {file.uri && inputs.title.length > 3 && (inputs.description.length == 0 || inputs.description.length > 5) &&
          <Button // UPLOAD Button
            iconLeft
            bordered
            style={{marginLeft: 5}}
            onPress={() => {
              handleUpload(file);
            }}
          >
            <Icon active name='add' />
            <Text>UPLOAD</Text>
          </Button>
          }

          <Button
            iconLeft
            bordered
            style={{marginLeft: 5}}
            onPress={() => resetForm(setFile)}
          >
            <Icon active name='undo' />
            <Text>RESET</Text>
          </Button>
        </View>

      </Form>
      }
    </Content>

  );
};

Upload.propTypes = {
  navigation: PropTypes.object,
};

export default Upload;
