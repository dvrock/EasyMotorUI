import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet, Image,TouchableOpacity} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {HomeNavigator} from '../navigations';

import colors from '../config/colors';

import CustomText from '../components/AppText';
import {Title, Drawer} from 'react-native-paper';
import Login from '../screens/Auth/Login';

function CustomDrawerContent(props) {
  return (
  
    <View style={{flex:1,backgroundColor:colors.white}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'transparent'}}
        style={{colors: colors.transparent}}>
        <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
            <TouchableOpacity
              style={{marginTop:90}}
              onPress={() => {
              }}>
          
              
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image
                  source={require('../assets/user.jpg')}
                  style={{height: 60, width: 60, borderRadius: 30}}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 15,
              }}>
              <Title style={styles.title}>Wasiq Ali</Title>
              <CustomText style={{color:colors.light}}>Wasiqali@gmail.com</CustomText>
            </View>
          </View>
          
          <View style={styles.drawerSection}>
            
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={require('../assets/home.png')}
                  style={{ width: 24, height: 24, }}
              />
              )}
              label={() => (
                <CustomText style={{fontWeight:'600'}}>Home</CustomText>
              )}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
            
            icon={({color, size}) => (
              <Image
                source={require('../assets/home.png')}
                style={{ width: 24, height: 24, }}
            />
            )}
            label={() => (
              <CustomText style={{fontWeight:'600'}}>Add Insurer</CustomText>
            )}
            onPress={() => {
              props.navigation.navigate('AddInsurer');
            }}
          />
          <DrawerItem
            
            icon={({color, size}) => (
              <Image
                source={require('../assets/home.png')}
                style={{ width: 24, height: 24, }}
            />
            )}
            label={() => (
              <CustomText style={{fontWeight:'600'}}>Add Field Officer</CustomText>
            )}
            onPress={() => {
              props.navigation.navigate('AddFieldOffier');
            }}
          />
          <DrawerItem
            
            icon={({color, size}) => (
              <Image
                source={require('../assets/home.png')}
                style={{ width: 24, height: 24, }}
            />
            )}
            label={() => (
              <CustomText style={{fontWeight:'600'}}>Add Dealer</CustomText>
            )}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
            <DrawerItem
            
            icon={({color, size}) => (
              <Image
                source={require('../assets/home.png')}
                style={{ width: 24, height: 24, }}
            />
            )}
            label={() => (
              <CustomText style={{fontWeight:'600'}}>Add Owner</CustomText>
            )}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            
            icon={({color, size}) => (
              <Image
                source={require('../assets/home.png')}
                style={{ width: 24, height: 24, }}
            />
            )}
            label={() => (
              <CustomText style={{fontWeight:'600'}}>Offers</CustomText>
            )}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            
            icon={({color, size}) => (
              <Image
                source={require('../assets/home.png')}
                style={{ width: 24, height: 24, }}
            />
            )}
            label={() => (
              <CustomText style={{fontWeight:'600'}}>Get Quote</CustomText>
            )}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            
            icon={({color, size}) => (
              <Image
                source={require('../assets/home.png')}
                style={{ width: 24, height: 24, }}
            />
            )}
            label={() => (
              <CustomText style={{fontWeight:'600'}}>Claims</CustomText>
            )}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />




            
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
   
  );
}

const DrawerNav = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <DrawerNav.Navigator useLegacyImlementation={false}
    screenOptions={{
      headerShown: false,
    }}
      initialRouteName="App"
      drawerContent={props => <CustomDrawerContent {...props} />}>
        <DrawerNav.Screen name="App" component={HomeNavigator} />
    </DrawerNav.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  userInfoSection: {
    alignItems:'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    backgroundColor: colors.primary,
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  button: {
    margin: 15,
    marginBottom: 70,
    width: '18%',
    height: 50,
    borderRadius: 50,
  },
});
export default DrawerNavigator;
