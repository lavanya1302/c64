import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Read ur story's here!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'scenter',
    marginTop: 100,
  },
});
