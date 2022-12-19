import { View, Text, Button } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Button title='sad' onPress={() => navigation.toggleDrawer()}></Button>
      <Text style={{color:'black'}}>SplashScreen</Text>
    </View>
  )
}