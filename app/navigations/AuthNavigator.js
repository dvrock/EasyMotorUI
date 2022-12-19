import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Auth/Login';
import SplashScreen from '../screens/SplashScreen';
import {DrawerNavigator} from '../navigations';


const Stack = createNativeStackNavigator();


const Drawer = () => (
  <Stack.Navigator
    initialRouteName="drawer"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="drawer" component={DrawerNavigator} />
  </Stack.Navigator>
);

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Drawer"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Drawer" component={Drawer} />

  </Stack.Navigator>
);

export default AuthNavigator;
