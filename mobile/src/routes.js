import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login'
import LoginDoctor from './pages/Login/Doctor'
import LoginPatient from './pages/Login/Patient'
import LoginVisitor from './pages/Login/Visitor'

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="LoginDoctor" component={LoginDoctor} />
                <AppStack.Screen name="LoginPatient" component={LoginPatient} />
                <AppStack.Screen name="LoginVisitor" component={LoginVisitor} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}