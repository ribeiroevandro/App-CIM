import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import LoginPatient from './pages/Login/Patient';
import LoginVisitor from './pages/Login/Visitor';
import ScreenVisitor from './pages/ScreenVisitor';

const AppStack = createStackNavigator();

export default function Stack() {
    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="LoginPatient" component={LoginPatient} />
                <AppStack.Screen name="LoginVisitor" component={LoginVisitor} />
                <AppStack.Screen name="ScreenVisitor" component={ScreenVisitor} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}