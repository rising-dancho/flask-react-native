import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

function Edit({ route, navigation }) {
  const data = route.params.data;

  const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState(data.body);

  const updateData = () => {
    fetch(`http://127.0.0.1:5000/update/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigation.navigate('Home', { data: data });
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        label="Title"
        value={title}
        mode="outlined"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Description"
        value={body}
        mode="outlined"
        multiline="true"
        numberOfLines="20"
        onChangeText={(text) => setBody(text)}
      />
      <Button
        style={styles.btnStyle}
        mode="contained"
        uppercase="true"
        icon="update"
        onPress={() => updateData()}
      >
        Update Article
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10, marginTop: 22 },
  inputStyle: {
    marginTop: 6,
  },
  btnStyle: {
    marginTop: 12,
    borderRadius: 4,
  },
});

export default Edit;
