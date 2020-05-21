import React from 'react';
import Dash from './pages/Dash';
import Login from './pages/Login';
import LoginPatient from './pages/Login/Patient';
import LoginVisitor from './pages/Login/Visitor';
import ScreenVisitor from './pages/ScreenVisitor';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

export function Drawer() {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen name="Home" component={Dash} />
            <AppDrawer.Screen name="Login" component={Login} />
        </AppDrawer.Navigator>
    );
}

const AppStack = createStackNavigator();

export default function Stack() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="LoginPatient" component={LoginPatient} />
                <AppStack.Screen name="LoginVisitor" component={LoginVisitor} />
                <AppStack.Screen name="ScreenVisitor" component={ScreenVisitor} />
                <AppStack.Screen name="Drawer" component={Drawer} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
