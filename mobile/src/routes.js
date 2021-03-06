import React from 'react';
import Dash from './pages/Dash';
import Login from './pages/Login';
import Exams from './pages/Exams';
import PreNatal from './pages/PreNatal';
import Galeria from './pages/Galeria';
import { Feather } from '@expo/vector-icons';
import {  } from '@expo/vector-icons/'
import { CustomDrawerContent } from './drawer';
import LoginPatient from './pages/Login/Patient';
import LoginVisitor from './pages/Login/Visitor';
import ScreenVisitor from './pages/ScreenVisitor';
import RecPass from './pages/Login/Patient/recPass.js';
import RecUser from './pages/Login/Patient/recUser.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import preNatalIcon from './assets/pregnant.png';
import { Image } from 'react-native';

const AppDrawer = createDrawerNavigator();

export function Drawer() {
    return (
        <AppDrawer.Navigator 
        keyboardDismissMode='none'
        drawerContent={props => <CustomDrawerContent {...props} />}
        hideStatusBar={true}
        drawerContentOptions={{
            activeTintColor: '#0163b6', 
            inactiveTintColor: '#54affd', 
            activeBackgroundColor: '#54affd', 
            labelStyle: {fontSize: 16, fontWeight: 'bold',}}}
        >
            <AppDrawer.Screen 
            name="Home" 
            component={Dash} 
            options={{ 
                drawerIcon: () => <Feather name="home" size={30} color="#0163b6" /> 
                }} 
            />
            
            <AppDrawer.Screen 
            name="Exames" 
            component={Exams} 
            options={{ 
                drawerIcon: () => <Feather name="clipboard" size={30} color="#0163b6" /> 
                }}
            />
            
            <AppDrawer.Screen 
            name="Pré-Natal" 
            component={PreNatal} 
            options={{ 
                drawerIcon: () => <Image source={preNatalIcon} fadeDuration={0} style={{width: 30, height: 30}} /> 
                }}
            />
                        
            <AppDrawer.Screen 
            name="Galeria" 
            component={Galeria} 
            options={{ 
                drawerIcon: () => <Feather name="youtube" size={30} color="#0163b6" /> 
                }}
            />
            
            <AppDrawer.Screen 
            name="Sair" 
            component={Login} 
            options={{ 
                drawerIcon: () => <Feather name="log-out" size={30} color="#0163b6" /> 
                }}
            />
        </AppDrawer.Navigator>
    );
}

const AppStack = createStackNavigator();

export default function Stack() {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
            screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="LoginPatient" component={LoginPatient} />
                <AppStack.Screen name="LoginVisitor" component={LoginVisitor} />
                <AppStack.Screen name="ScreenVisitor" component={ScreenVisitor} />
                <AppStack.Screen name="RecPass" component={RecPass} />
                <AppStack.Screen name="RecUser" component={RecUser} />
                <AppStack.Screen name="Drawer" component={Drawer} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
