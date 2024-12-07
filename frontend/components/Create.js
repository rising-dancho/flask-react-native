import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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
        textColor="#E9DDFE"
        buttonColor="#584290"
        mode="contain"
        uppercase="true"
        icon="pencil"
        onPress={() => alert('You touched my tralala')}
      >
        Add Article
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10, marginTop: 30 },
  inputStyle: {
    marginTop: 5,
  },
  btnStyle: {
    marginTop: 10,
    borderRadius: 4,
  },
});

export default Create;
