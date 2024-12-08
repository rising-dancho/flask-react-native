import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Card, FAB } from 'react-native-paper';

function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    fetch('http://127.0.0.1:5000/get', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((article) => {
        setData(article);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(data);

  const clickedItem = (item) => {
    navigation.navigate('Details', { data: item });
  };

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle}>
        <Text style={styles.title} onPress={() => clickedItem(item)}>
          {item.title}
        </Text>
        <Text style={styles.body}>{item.body}</Text>
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
        onRefresh={() => {
          loadData();
        }}
        refreshing={loading}
        keyExtractor={(item) => `${item.id}`}
        ListFooterComponent={() => (
          <Text style={styles.footer}>© 2024 adfinem</Text>
        )}
        style={styles.flatlist}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('Create')}
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
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
    color: '#381F71',
  },
  body: {
    fontSize: 14,
  },
  fab: {
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: 0,
    width: 56,
    height: 56,
  },
});

export default Home;
