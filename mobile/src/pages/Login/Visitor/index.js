import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../../assets/logo.png';

export default function LoginVisitor() {
    
    const [isSelected, setSelection] = useState(false);
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }
    
    return(
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

            <View style={Styles.back}>
                <TouchableOpacity style={Styles.backLink} onPress={navigateBack}>
                    <Feather  name="chevron-left" size={64} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={Styles.form}>

                <Text style={Styles.header}>
                    Bem vindo
                </Text>
                
                <Image source={logoImg} />
                
                <View style={Styles.input}>
                    
                    <Feather style={Styles.inputIcon} name="user" size={32} color="#fff" />
                    
                    <TextInput 
                    style={Styles.inputText}
                    placeholder="Usuário" />
                
                </View>

                <TouchableOpacity style={Styles.button}>
                    <Text style={Styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}