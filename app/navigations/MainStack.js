import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SplashScreen from "../screens/SplashScreen";
import { AuthNavigator } from "./AuthNavigator";
const Stack = createNativeStackNavigator();
const MainNavigator = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false,
    }}
  >
   
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Auth" component={AuthNavigator} />
  </Stack.Navigator>
);

export default AuthNavigator;
