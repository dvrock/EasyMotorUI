import { View, Text,Button } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux'
export default function Home() {
    const navigation = useNavigation();
    const allreducer =useSelector(state=>state)
    console.log(allreducer);
  return (
    <View>
    <Button title='Open Drawer' onPress={() => navigation.toggleDrawer()}></Button>

  </View>
  )
}