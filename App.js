import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeedScreen from "./Screens/FeedScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <FeedScreen/>
      {/*<WelcomeScreen/>*/}
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
