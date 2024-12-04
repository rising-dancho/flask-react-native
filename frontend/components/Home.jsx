import React, { useState } from 'react';
import { Text, View, Flatlist } from 'react-native';

function Home({ name }) {
  const data = [
    {
      id: 1,
      title: 'First title',
      body: 'First body',
    },
    {
      id: 2,
      title: 'Second title',
      body: 'Second body',
    },
    {
      id: 3,
      title: 'Third title',
      body: 'Third body',
    },
  ];

  return (
    <View>
      <Flatlist
        data={data}
        renderItem={(data) => {
          console.log(data);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
      <Text>Welcome to Python, Flask, and React Native</Text>
      <Text>This is my second text</Text>
      <Text>{name}</Text>
    </View>
  );
}

export default Home;
