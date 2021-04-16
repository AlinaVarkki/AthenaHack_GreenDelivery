import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeedScreen from "./Screens/FeedScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <FeedScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
