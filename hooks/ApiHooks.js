import {useState, useContext, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import {MediaContext} from '../contexts/MediaContext';

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';
const tagUrl = 'http://media.mw.metropolia.fi/wbma/tags/miinus30';

const fetchPostUrlUserData = async (url, data) => {
  const userToken = await AsyncStorage.getItem('userToken');
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': userToken,
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  console.log('fetchPostUrl json', json);
  return json;
};
const mediaAPI = () => {
  const getAllMedia = () => {
    const {media, setMedia} = useContext(MediaContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetchGetUrl(apiUrl + 'media').then((json) => {
        setMedia(json);
        setLoading(false);
      });
    }, []);
    return [media, loading];
  };

  const fetchGetUrl = async (url) => {
    const userToken = await AsyncStorage.getItem('userToken');
    // console.log('fetchGetUrl', url);
    const response = await fetch(url, {
      headers: {
        'x-access-token': userToken,
      },
    });
    const json = await response.json();
    // console.log('fetchUrl json', json);
    return json;
  };

  const fetchPostUrl = async (url, data) => {
    // console.log('fetchPostUrl', url);
    // console.log('fetchPostUrl data', data);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    // console.log('fetchPostUrl json', json);
    return json;
  };

  const fetchUploadUrl = async (url, data, token) => {
    const userToken = await AsyncStorage.getItem('userToken');
    // console.log('fetchUploadUrl', url, data, userToken);
    console.log('data:' + data);
    const response = await fetch(apiUrl + url, {
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data',
        'x-access-token': userToken,
      },
      body: data,
    });
    let json = {error: 'oops'};
    if (response.ok) {
      json = await response.json();
      // console.log('fetchUploadUrl json', json);
      addTag(json.file_id, 'example tag'); // <----------------------------
    }
    return json;
  };
  /*
  const addTag = async (id, tag) => { // <----------------------------
    const userToken = await AsyncStorage.getItem('userToken');
    const response = await fetch(apiUrl + 'tags', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-access-token': userToken,
      },
      body: JSON.stringify({file_id: id, tag: tag}),
    });
    const json = await response.json();
    console.log(json);
  }; */

  const fetchTagUrl = async (url, data) => { // file_id puuttuu
    const userToken = await AsyncStorage.getItem('userToken');
    const response = await fetch(apiUrl + url, {
      method: 'POST',
      headers: {
        'content-type': 'Parameter',
        'x-access-token': userToken,
      },
      body: {
        'file_id': url,
        'tag': data,
      },
    });
    let json = {error: 'oops'};
    if (response.ok) {
      json = await response.json();
      // console.log('fetchUploadUrl json', json);
    }
    return json;
  };

  const fetchDeleteUrl = async (url, token = '') => {
    const userToken = await AsyncStorage.getItem('userToken');
    // console.log('fetchDeleteUrl', url, userToken);
    const response = await fetch(apiUrl + url, {
      method: 'DELETE',
      headers: {
        'x-access-token': userToken,
      },
    });
    const json = await response.json();
    // console.log('fetchDeleteUrl json', json);
    return json;
  };
  const reloadAllMedia = (setMedia, setMyMedia) => {
    fetchGetUrl(apiUrl +'tags/example%20tag').then((json) => {
      setMedia(json);
    });
    fetchGetUrl(apiUrl +'media/user').then((json) => {
      setMyMedia(json);
    });
  };

  const getThumbnail = (url) => {
    const [thumbnails, setThumbnails] = useState({});
    useEffect(() => {
      fetchGetUrl(apiUrl + 'media/' + url).then((json) => {
        setThumbnails(json.thumbnails);
      });
    }, []);
    return thumbnails;
  };
  const signInAsync = async (inputs, props) => {
    const data = {
      'username': inputs.username,
      'password': inputs.password,
    };
    const json = await fetchPostUrl(apiUrl + 'login', data);
    await AsyncStorage.setItem('userToken', json.token);
    await AsyncStorage.setItem('user', JSON.stringify(json.user));
    props.navigation.navigate('App');
  };
  const registerAsync = async (inputs, props) => {
    const data = {
      'username': inputs.username,
      'password': inputs.password,
      'email': inputs.email,
      'full_name': inputs.full_name,
    };
    const json = await fetchPostUrl(apiUrl + 'users', data);
    if (!json.error) {
      signInAsync(inputs, props);
    }
  };

  /*
  const getUserFromToken = async () => {
    useEffect(() => {
      fetchGetUrl(apiUrl + 'users/user').then((json) => {
        console.log('getUserTOken', json);
        AsyncStorage.setItem('user', JSON.stringify(json));
      });
    }, []);
  };
  */

  const userToContext = async () => {
    const {user, setUser} = useContext(MediaContext);
    const getFromStorage = async () => {
      const storageUser = JSON.parse(await AsyncStorage.getItem('user'));
      // console.log('storage', storageUser);
      setUser(storageUser);
    };
    useEffect(() => {
      getFromStorage();
    }, []);
    return [user];
  };


  const getAvatar = (user) => {
    const [avatar, setAvatar] = useState('http://placekitten.com/100/100');
    console.log('avatar', apiUrl + 'tags/avatar_' + user.user_id);
    useEffect(() => {
      fetchGetUrl(apiUrl + 'tags/avatar_' + user.user_id).then((json) => {
        console.log('avatarjson', json[0].filename);
        setAvatar(apiUrl + 'uploads/' + json[0].filename);
      });
    }, []);
    return avatar;
  };

  const getTagItem = () => { // http://media.mw.metropolia.fi/wbma/tags/Example%20tag
    const [tag, setTag] = useState('http://placekitten.com/100/100');
    useEffect(() => {
      fetchGetUrl(apiUrl + 'tags/Example%20tag').then((json) => {
        setTag(apiUrl + 'uploads/' + json[0].filename);
      });
    }, []);
    return tag;
  };

  const getTag = (url) => {
    const [tag, setTag] = useState(' ');
    useEffect(() => {
      fetchGetUrl(apiUrl + 'tags/file/' + url).then((json) => { //
        console.log('tags: ', json[0].tag_id, json[0].file_id, json[0].tag);
        setTag(json[0].tag);
      }).catch((error)=>{
        console.log(console.error);
      });
    }, []);
    return tag;
  };
  const getTagItems = (tag) => { // <-----------------------
    const {fetchGetUrl} = mediaAPI();
    const {media, setMedia} = useContext(MediaContext);
    useEffect(() => {
      setMedia([]);
      fetchGetUrl(tagUrl).then((json) => {
        setMedia(json);
      });
    }, [tag]);
    return [media];
  };


  const getUserInfo = (userId) => {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
      fetchGetUrl(apiUrl + 'users/' + userId).then((json) => {
        setUserInfo(json);
      }).catch((error)=>{
        console.log(console.error);
      });
    }, []);
    return userInfo;
  };

  const checkAvailable = async (username) => {
    const json = await fetchGetUrl(apiUrl + 'users/username/' + username);
    if (!json.error) {
      if (json.available) {
        return 'Username ' + json.username + ' is available. ';
      } else {
        return 'Username ' + json.username + ' is not available. ';
      }
    } else {
      console.log(json.error);
    }
  };

  const uploadFile = async (formData) => {
    return fetchUploadUrl('media', formData).then((json) => {
      return json;
    });
  };

  const uploadTag = async (tag) => {
    return fetchTagUrl('tags', tag).then((json) => {
      return json;
    });
  };
  const addDefaultTag = (data) => {
    return fetchPostUrlUserData(apiUrl + 'tags/', data).then((json) => {
      console.log('addDefaultTag', json);
      return json;
    });
  };
  const addTag = (data) => {
    return fetchPostUrlUserData(apiUrl + 'tags/', data).then((json) => {
      console.log('addTag', json);
      return json;
    });
  };

  const getAllMyMedia = () => {
    const {myMedia, setMyMedia} = useContext(MediaContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetchGetUrl(apiUrl + 'media/user').then((json) => {
        setMyMedia(json);
        setLoading(false);
      });
    }, []);
    return [myMedia, loading];
  };
  const deleteMedia = async (file, setMyMedia, setMedia) => {
    return fetchDeleteUrl('media/' + file.file_id).then((json) => {
      console.log('delete', json);
      setMedia([]);
      setMyMedia([]);
      reloadAllMedia(setMedia, setMyMedia);
    });
  };

  return {
    getAllMedia,
    getThumbnail,
    signInAsync,
    registerAsync,
    userToContext,
    getAvatar,
    getUserInfo,
    checkAvailable,
    uploadFile,
    reloadAllMedia,
    getAllMyMedia,
    deleteMedia,
    getTag, //
    uploadTag,
    getTagItem,
    getTagItems,
    fetchGetUrl,
    addDefaultTag,
  };
};

export default mediaAPI;
