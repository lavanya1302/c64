import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class WriteStoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Write ur storys here!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
});
