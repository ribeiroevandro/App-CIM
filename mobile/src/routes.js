import React from 'react';
import Dash from './pages/Dash';
import Login from './pages/Login';
import { Feather } from '@expo/vector-icons';
import { CustomDrawerContent } from './drawer';
import LoginPatient from './pages/Login/Patient';
import RecPass from './pages/Login/Patient/recPass.js';
import RecUser from './pages/Login/Patient/recUser.js';
import LoginVisitor from './pages/Login/Visitor';
import ScreenVisitor from './pages/ScreenVisitor';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

export function Drawer() {
    return (
        <AppDrawer.Navigator 
        keyboardDismissMode='none'
        drawerContent={props => <CustomDrawerContent {...props} />}
        hideStatusBar={true}
        drawerContentOptions={{
            activeTintColor: '#663399', 
            inactiveTintColor: '#663399', 
            activeBackgroundColor: '#ccccff', 
            labelStyle: {fontSize: 16, fontWeight: 'bold',}}}
        >
            <AppDrawer.Screen 
            name="Home" 
            component={Dash} 
            options={{ 
                drawerIcon: () => <Feather name="home" size={30} color="#663399" /> 
                }} 
            />
            <AppDrawer.Screen 
            name="Sair" 
            component={Login} 
            options={{ 
                drawerIcon: () => <Feather name="log-out" size={30} color="#663399" /> 
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
                <AppStack.Screen name="RecUSer" component={RecUser} />
                <AppStack.Screen name="Drawer" component={Drawer} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
