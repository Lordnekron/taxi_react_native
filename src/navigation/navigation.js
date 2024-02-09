import React from "react";
import HomeScreen from "../screen/HomeScreen";
import Auth from "../screen/Auth";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function HomeNavigator()  {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"Auth"}>
      <Stack.Screen name={"Auth"} component={Auth} />
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
    
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;