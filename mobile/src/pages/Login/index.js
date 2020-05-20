import React from 'react';
import { View, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import logoImg from '../../assets/logo.png';
import Styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
    
    const navigation = useNavigation();

    function navigateToPatient() {
        navigation.navigate('LoginPatient');
    }
    function navigateToVisitor() {
        navigation.navigate('LoginVisitor');
    }
    
    return (
        
        <View style={Styles.container}>
            
            <LinearGradient 
            colors={['transparent','#666699']} 
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 800}}>
            </LinearGradient>

            <Image style={{marginBottom: 100}} source={logoImg} />
            
            <TouchableOpacity onPress={navigateToPatient}>
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>
                        Paciente
                    </Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={{marginTop: 40}} onPress={navigateToVisitor}>
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>
                        Visitante
                    </Text>
                </View>
            </TouchableOpacity>
        
        </View>
    );
}