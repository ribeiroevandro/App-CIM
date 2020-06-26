import React from 'react';
import Styles from './styles';
import logoImg from '../../assets/logo.png';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity} from 'react-native';

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
            colors={['transparent','#0163b6']} 
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