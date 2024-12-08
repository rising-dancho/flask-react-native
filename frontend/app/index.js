import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Home from '../pages/Home.js';
import Create from '../pages/Create.js';
import Details from '../pages/Details.js';
import Edit from '../pages/Edit.js';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
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
