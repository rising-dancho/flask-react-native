import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

function Details({ route }) {
  const data = route.params.data;
  return (
    <ScrollView>
      <Card style={styles.cardStyle}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.body}>{data.body}</Text>
        <Text style={styles.date}>{data.date}</Text>
      </Card>
    </ScrollView>
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
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 6,
  },
  body: {
    fontSize: 20,
    marginBottom: 3,
  },
  date: {
    fontSize: 12,
  },
});

export default Details;
