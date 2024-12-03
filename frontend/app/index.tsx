import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from '../components/Home.jsx';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
