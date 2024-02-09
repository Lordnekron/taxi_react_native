import React from "react";
import { View, Dimensions, TextInput, Button, Pressable, Text } from "react-native";
import styles from "./styles/auth";

const Auth = ( { navigation } ) => {

  const loadScene = () => {
    navigation.navigate('HomeScreen');
  }

  return (
    <View>
      <View style={{flex: 1}}>
          <TextInput
            title="Email"
          />
          <TextInput 
            title="Password"
          />
          <Pressable
        onPress={loadScene}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
        ]}>
        {({ pressed }) => (
          <Text style={styles.button}>
            Press Me
          </Text>
        )}
      </Pressable>
      </View>
    </View>
  );
};

export default Auth;
