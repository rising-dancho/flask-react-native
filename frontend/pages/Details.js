import React from 'react';
import { View, ScrollView, Text } from 'react-native';

function Details({ route }) {
  const data = route.params.data;
  return (
    <ScrollView>
      <View>
        <Text>{data.title}</Text>
        <Text>{data.body}</Text>
      </View>
    </ScrollView>
  );
}

export default Details;
