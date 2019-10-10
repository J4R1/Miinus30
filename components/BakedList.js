/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {List as BaseList} from 'native-base';
import BakedListItem from './BakedListItem';
import mediaAPI from '../hooks/ApiHooks';

const BakedList = (props) => {
  const {navigation} = props;
  // const {getAllMedia} = mediaAPI();
  // const [media, loading] = getAllMedia();

  // const {getViaTag} = mediaAPI();
  // const [media, loading] = getViaTag();
  // console.log(loading);
  // console.log('media', media);
  const x = 'example tag';

  const {getTagItems} = mediaAPI();
  const [media, loading] = getTagItems();
  return (
    <BaseList
      style={{
        backgroundColor: '#00262f',
      }}
      dataArray={media}
      renderRow={(item) =>
        <BakedListItem navigation={navigation} singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

BakedList.propTypes = {
  navigation: PropTypes.object,
};

export default BakedList;
