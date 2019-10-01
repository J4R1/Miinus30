/* eslint-disable prefer-const */
/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// views/Upload.js
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable arrow-parens */
/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
/* eslint(arrow-parens)*/

import React, {useState, useEffect, Component} from 'react';
import {Form, Button, Text, Content} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import PropTypes from 'prop-types';
import useUploadForm from '../hooks/UploadHooks';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Image, View, StyleSheet, Alert} from 'react-native';
import BarcodeScanner from '../views/BarCode';
import Upload from '../views/Upload';


class Testi extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
      }}>
        <Upload>
        </Upload>
        <Text>
        </Text>
        <BarcodeScanner>
        </BarcodeScanner>
      </View>
    );
  }
}
// change barcode scanner aspect ratio in BarcodeScanner.js

export default Testi;
/*
          aaa
          {global.MyVar}
          sss
          {/* Global Variable */
