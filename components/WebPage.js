import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

function WebPage(props) {
  const {route} = props;
  const {uri} = route.params;
  return <WebView style={styles.container} source={{uri}} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebPage;
