import { View, Text, Button } from 'react-native'
import React from 'react'
import {NavigationContainer,createNavigationContainerRef} from '@react-navigation/native';
import NavigationTheme from './app/navigations/NavigationTheme';
import {AuthNavigator} from './app/navigations';

const navigationRef = createNavigationContainerRef()

export default function App() {

  return (

     <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <AuthNavigator />
      </NavigationContainer>
  )
}