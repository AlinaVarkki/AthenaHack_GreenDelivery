import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeedScreen from "./Screens/FeedScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import DrawerNavigation from "./Navigators/DrawerNavigation";

export default function App() {
  return (

    // <View style={styles.container}>
    //   <FeedScreen/>
    //   <MainNavigator/>
    //   {/*<WelcomeScreen/>*/}
    // </View>
      <DrawerNavigation/>
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
