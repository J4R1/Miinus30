/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable arrow-parens */
/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
/* eslint(arrow-parens)*/
import * as React from 'react';
import {Text, View, StyleSheet, Button, FormTextInput, Form} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {Card} from 'native-base';
import useUploadForm from '../hooks/UploadHooks';


export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    myText: 'My Original Text',
    // lastRefresh: Date(Date.now()).toString(),
    // refreshScreen: this.refreshScreen.bind(this),
  }
  // refreshScreen = this.refreshScreen.bind(this) //
  async componentDidMount() {
    this.getPermissionsAsync();
  }
  constructor() { // <----
    super();
    // Setting up global variable
    global.MyVar = this.state.myText;
  }
  getPermissionsAsync = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  };

  updateState = (data) => {
    this.setState({ myText: data }); // <----
  }
  updateState = (data) => {
    this.setState({ myText: data }); // <----
  }
  getState = () => {
    return ( this.state.myText);
  }
  /*
  refreshScreen() {
    this.setState({ lastRefresh: Date(Date.now()).toString() })
  }*/

  render() {
    const {hasCameraPermission, scanned} = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          maxHeight: 120,
          // width: 400,
          // flexDirection: 'column',
          // flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Text name="red" onPress = {this.updateText}>
          {this.state.myText}
        </Text>

        <Card style={{
          maxHeight: 120,
          backgroundColor: '#383838',
        }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            // captureQuality={Camera.constants.CaptureQuality["1080p"]}
            // style={StyleSheet.absoluteFillObject}
            style={{
            // flex: 1,
              height: 600,
              overflow: 'hidden',
            }}
          />
        </Card>
        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({scanned: false})} />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({type, data}) => {
    this.setState({scanned: true});
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.setState({myText: 'Barcode: ' + data});
    this.updateState(data);
    // this.refreshScreen;
    // push desc
    // useUploadForm.handleTagChange(data);
  };
}


