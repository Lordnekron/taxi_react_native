import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeNavigator from './src/navigation/navigation'

export default function App() {

   

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <HomeNavigator />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0a0a0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
