import { View, Text, Button } from 'react-native'
import React from 'react'
import {NavigationContainer,createNavigationContainerRef} from '@react-navigation/native';
import NavigationTheme from './app/navigations/NavigationTheme';
import {AuthNavigator} from './app/navigations';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './app/redux/store';
const navigationRef = createNavigationContainerRef()

export default function App() {

  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
     <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <AuthNavigator />
      </NavigationContainer>
      </PersistGate>
      </Provider>
  )
}