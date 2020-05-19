import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './styles';
import logoImg from '../../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

export default function LoginPatient() {
    
    const [isSelected, setSelection] = useState(false);
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    function logIn() {
        navigation.navigate('Dash');
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

                <View style={Styles.row}>
                    
                    <View style={Styles.checkboxCol}>
                        <CheckBox 
                            disabled={false}
                            value={isSelected}
                            onValueChange={() => isSelected ? setSelection(false) : setSelection(true)} 
                            style={Styles.checkbox} />
                        <Text style={Styles.checkboxText}>Lembrar de mim</Text>
                    </View>

                    <View style={Styles.linkCol}>
                        <TouchableOpacity style={Styles.passLink}>
                                <Text style={Styles.passLinkText}>
                                    Esqueceu sua senha?
                                </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.codLink}>
                            <Text style={Styles.codLinkText}>
                                Esqueceu seu código?
                            </Text>
                        </TouchableOpacity>
                    </View>
                
                </View>

                <View style={Styles.buttonContainer}>
                    <TouchableOpacity style={Styles.button} onPress={logIn}>
                        <Text style={Styles.buttonText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.registerLink}>
                        <Text style={Styles.registerLinkText}>
                            Não possui conta?
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}