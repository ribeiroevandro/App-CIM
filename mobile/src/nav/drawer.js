import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/Login';
import LoginDoctor from '../pages/Login/Doctor';
import LoginPatient from '../pages/Login/Patient';
import LoginVisitor from '../pages/Login/Visitor';
import ScreenVisitor from '../pages/ScreenVisitor';
import Dash from '../pages/Dash';

const AppDrawer = createDrawerNavigator();

export default function Drawer() {
    return (
        <NavigationContainer >
            <AppDrawer.Navigator screenOptions={{ headerShown: false }}>
                <AppDrawer.Screen name="Login" component={Login} />
                <AppDrawer.Screen name="LoginDoctor" component={LoginDoctor} />
                <AppDrawer.Screen name="LoginPatient" component={LoginPatient} />
                <AppDrawer.Screen name="LoginVisitor" component={LoginVisitor} />
                <AppDrawer.Screen name="ScreenVisitor" component={ScreenVisitor} />
                <AppDrawer.Screen name="Dash" component={Dash} />
            </AppDrawer.Navigator>
        </NavigationContainer>
    )
}