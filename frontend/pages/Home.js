import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Card, FAB } from 'react-native-paper';

function Home(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((article) => {
        setData(article);
      });
  }, []);

  console.log(data);

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle}>
        <Text style={styles.fontStyle}>{item.title}</Text>
        <Text>{item.body}</Text>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
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
        style={styles.flatlist}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => props.navigation.navigate('Create')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  fontStyle: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: 0,
    width: 56,
    height: 56,
  },
  // header: {
  //   padding: 10,
  //   fontSize: 24,
  //   fontWeight: '700',
  // },
});

export default Home;
