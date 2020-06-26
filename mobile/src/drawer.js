import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import profileImg from './assets/profile.png'
import Constants from 'expo-constants';

export function CustomDrawerContent(props) {
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
            <Image source={profileImg} style={{height: 100, width: 100, borderRadius: 100/ 2, marginBottom: 10,}} />
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 18,}}>
                Paciente paciente
            </Text>            
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }