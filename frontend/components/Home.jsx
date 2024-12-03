import React from 'react';
import { Text, View } from 'react-native';

function Home({ name }) {
  return (
    <View>
      <Text>Welcome to Python, Flask, and React Native</Text>
      <Text>This is my second text</Text>
      <Text>{name}</Text>
    </View>
  );
}

export default Home;
