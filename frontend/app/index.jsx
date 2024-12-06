import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
// import Home from '../components/Home.js';
import Create from '../components/Create.js';

export default function Index() {
  return (
    <View style={styles.container}>
      <Create />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    marginTop: Constants.statusBarHeight,
  },
});
