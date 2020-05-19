import React from 'react';
import { View, Text, Image, TextInput, CheckBox, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './styles';
import logoImg from '../../../assets/logo.png';

export default function LoginPatient() {
    return(
        <View style={Styles.newContainer}>
            
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
                <TouchableOpacity style={Styles.backLink}>
                    <Feather  name="chevron-left" size={64} color="#fff" />
                </TouchableOpacity>
            </View>
                        
            <View style={Styles.container}>

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
                
                <View style={Styles.input}>
                    
                    <Feather style={Styles.inputIcon} name="info" size={32} color="#fff" />
                    
                    <TextInput 
                    style={Styles.inputText}
                    placeholder="Código" />
                
                </View>
                
                <View style={Styles.input}>
                    
                    <Feather style={Styles.inputIcon} name="lock" size={32} color="#fff" />
                    
                    <TextInput 
                    style={Styles.inputText}
                    placeholder="Senha" />
                
                </View>

                <View style={Styles.checkboxRow}>
                    <CheckBox style={Styles.checkbox} />
                    <Text style={Styles.checkboxText}>Lembrar de mim</Text>
                    <TouchableOpacity style={Styles.checkboxLink}>
                        <Text style={Styles.checkboxLinkText}>
                            Esqueceu sua senha?
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={Styles.codLink}>
                    <Text style={Styles.codLinkText}>
                        Esqueceu seu código?
                    </Text>
                </TouchableOpacity>

                <View style={Styles.buttonContainer}>
                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.buttonText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.passLink}>
                        <Text style={Styles.passLinkText}>
                            Não possui conta?
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}