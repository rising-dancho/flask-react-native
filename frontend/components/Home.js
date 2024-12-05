import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

function Home() {
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

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle}>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      </Card>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderData(item);
        }}
        keyExtractor={(item) => `${item.id}`}
        // ListHeaderComponent={() => (
        //   <Text style={styles.header}>List of Pokemons</Text>
        // )}
        ListFooterComponent={() => (
          <Text style={styles.footer}>© 2024 adfinem</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    margin: 10,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  // header: {
  //   padding: 10,
  //   fontSize: 24,
  //   fontWeight: '700',
  // },
});

export default Home;
