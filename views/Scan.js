/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
// views/Upload.js

import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, Image, View, ToolbarAndroid} from 'react-native';
import {Form, Button, Text, Content, Card, Icon} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import PropTypes from 'prop-types';
import useUploadForm from '../hooks/UploadHooks';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Video} from 'expo-av';
import BarcodeScanner from '../views/BarCode';
import Testi2 from '../views/Testi2';
import {BarCodeScanner} from 'expo-barcode-scanner';


const Scan = (props) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    inputs,
    handleTitleChange,
    handleDescriptionChange,
    handleUpload,
    handleTagChange,
    resetForm,
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
    <Content style={{
      // flex: 1,
    }
    }>
      <View style={styles.statusBar} />
      <ToolbarAndroid // # text color
        style={styles.toolbar}
        title='Miinus30'
        titleColor='#A8A8A8'/>

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Card style={{
          width: 160,
          height: 160,
        }}>
          {file &&
          <Image source={{uri: file.uri}} style={{width: 150, height: 150}} />
          }
        </Card>
      </View>
      <Form>
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
        <View style={{ flexDirection: 'row',
          marginTop: 5,
          marginBottom: 5,
        }}>
          <Button iconLeft bordered style={{// SELECT Button
            marginLeft: 5,
            // styles.mb15
          }}
          onPress={pickImage}
          >
            <Icon active name='attach' />
            <Text>{global.MyVar}</Text>
          </Button>
          <BarCodeScanner style={{flex: 1}}
            onBarcodeRead={({data, type}) => {
              // handle your scanned barcodes here!
              // as an example, we show an alert:
              Alert.alert(`Barcode ‘${data}’ of type ‘${type}’ was scanned.`);
            }}
          />
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
          <Button // RESET Button
            iconLeft
            bordered
            style={{marginLeft: 5}}
            onPress={() => {
              inputs.title = '';
              inputs.description = '';
              setFile(null);
            }}
          >
            <Icon active name='undo' />
            <Text>RESET</Text>
          </Button>
        </View>
      </Form>

    </Content>

  );
};
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#383838', // header
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  statusBar: {
    backgroundColor: '#282828', // top
    height: Constants.statusBarHeight,
  },
  container: {
    backgroundColor: '#EEE',
  },
  mb15: {
    marginBottom: 20,
  },
});
Scan.propTypes = {
  navigation: PropTypes.object,
};

export default Scan;

