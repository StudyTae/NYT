import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import { useNavigation } from '@react-navigation/core';

const Webview = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: props.route?.params?.url || 'https://happytoseeyou.co.kr',
        }}
      />
    </View>
  );
};

export default Webview;
