/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {List as BaseList} from 'native-base';
import MyFilesListItem from './MyFilesListItem';
import mediaAPI from '../hooks/ApiHooks';

const MyFilesList = (props) => {
  const {navigation} = props;
  const {getAllMyMedia} = mediaAPI();
  const [myMedia, loading] = getAllMyMedia();
  console.log(loading);
  console.log('media', myMedia);
  return (
    <BaseList style={{backgroundColor: '#00262f', margin: 0, padding: 0, flex: 1}}
      dataArray={myMedia}
      renderRow={(item) =>
        <MyFilesListItem navigation={navigation} singleMedia={item} style={{flex: 1, margin: 0, padding: 0}}/>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

MyFilesList.propTypes = {
  navigation: PropTypes.object,
};

export default MyFilesList;
