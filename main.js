import Expo from 'expo';
import React from 'react';
import { StyleSheet, WebView } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://roy.dothome.co.kr/webView/webView.html'}}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#fff'
  },
});

Expo.registerRootComponent(App);
