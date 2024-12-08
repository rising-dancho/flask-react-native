import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Card, Button } from 'react-native-paper';

function Details({ route, navigation }) {
  const data = route.params.data;

  const deleteData = () => {
    fetch(`http://127.0.0.1:5000/delete/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        navigation.navigate('Home');
      })
      .catch((error) => console.log(error));
  };

  return (
    <ScrollView>
      <Card style={styles.cardStyle}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.body}>{data.body}</Text>
        <Text style={styles.date}>{data.date}</Text>
        <View style={styles.btnContainer}>
          <Button
            style={styles.btnStyle}
            mode="contained"
            uppercase="true"
            icon="update"
            onPress={() => navigation.navigate('Edit', { data: data })}
          >
            Update
          </Button>
          <Button
            style={styles.btnStyle}
            uppercase="true"
            icon="trash-can"
            textColor="#ffffff"
            buttonColor="#D03848"
            onPress={() => deleteData()}
          >
            Delete
          </Button>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'center',
    marginTop: 12,
  },
  cardStyle: {
    padding: 10,
    margin: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
    color: '#381F71',
  },
  body: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 3,
  },
  date: {
    textAlign: 'center',
    fontSize: 12,
  },
  btnStyle: {
    marginTop: 12,
    borderRadius: 4,
    borderRadius: 4,
    marginHorizontal: 6, // Space between buttons
    flexGrow: 0, // Prevent buttons from stretching
  },
});

export default Details;
