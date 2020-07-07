import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import logoImg from './assets/logo.png'
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';

export function CustomDrawerContent(props) {
    
    const [name, setName] = useState('');

    async function getName (){
      setName(await AsyncStorage.getItem('name'));
    }

    useEffect(() => {
      getName();
    },[])

    return (
      <DrawerContentScrollView {...props}>
        <View style={{
            backgroundColor: '#54affd',
            top: -5,
            paddingTop: Constants.statusBarHeight + 10,
            alignItems: 'center',
            paddingBottom: 15,
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15, 
        }}>
            <Image source={logoImg} style={{height: 100, width: 100, marginBottom: 10,}} />
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 18,}}>
                {name}
            </Text>            
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }