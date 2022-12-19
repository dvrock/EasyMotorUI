import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useRef, useEffect} from 'react';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
