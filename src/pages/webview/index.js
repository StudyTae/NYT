import styles from '@css/webview/styles';
import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import WebView from 'react-native-webview';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { handleClips } from '@common/helpers';

const Webview = (props) => {
  const { route, navigation } = props;
  const dispatch = useDispatch();
  const { clipList } = useSelector((s) => s.clips, shallowEqual); // 클립한 뉴스 리스트 상태
  const { url, newsitem } = route?.params;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '뉴스 상세',
      headerLeft: () => (
        <TouchableOpacity
          style={{ ...styles.headerButton, marginLeft: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('/img/close-black.png')}
            resizeMode={'contain'}
            style={styles.headerIcon}
            fadeDuration={0}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ ...styles.headerButton, marginRight: 10 }}
          onPress={() => dispatch(handleClips(clipList, newsitem))}
        >
          <Image
            source={
              clipList.findIndex((clip) => clip._id === newsitem._id) >= 0
                ? require('/img/clip-on.png')
                : require('/img/clip-off.png')
            }
            resizeMode={'stretch'}
            style={styles.headerIcon}
            fadeDuration={0}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: url || 'https://www.nytimes.com',
        }}
        originWhitelist={['*']}
        onShouldStartLoadWithRequest={() => true}
        startInLoadingState={true}
      />
    </View>
  );
};

export default Webview;
