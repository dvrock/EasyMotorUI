import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useRef, useEffect} from 'react';
import AddFieldOffier from '../screens/AddFieldOffier';
import AddInsurer from '../screens/AddInsurer';
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
      <Stack.Screen name="AddInsurer" component={AddInsurer} />
      <Stack.Screen name="AddFieldOffier" component={AddFieldOffier}/>

    </Stack.Navigator>
  );
};

export default HomeNavigator;
