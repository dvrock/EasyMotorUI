import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {HomeNavigator} from '../navigations';
import colors from '../config/colors';
import Login from '../screens/Auth/Login';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
  
    tabBarOptions={{
      activeTintColor: colors.primary,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
                  source={require('../assets/Home.png')}
                  style={{ width: 23, height: 23, tintColor: color }}
              />
      )
      }}
    />
     <Tab.Screen
      name="Login"
      component={Login}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
                  source={require('../assets/Home.png')}
                  style={{ width: 23, height: 23, tintColor: color }}
              />
      )
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
