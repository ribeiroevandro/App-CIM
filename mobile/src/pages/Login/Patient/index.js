import Styles from './styles';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import logoImg from '../../../assets/logo.png';
import { LinearGradient } from 'expo-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import AsyncStorange from '@react-native-community/async-storage';
import api from '../../../services/api';

export default function LoginPatient() {
    const [User,  setUser] = useState('');
    const [Password,  setPassword] = useState('');

    const [isSelected, setSelection] = useState(false);
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }
    
    function navigateRecPass() {
        navigation.navigate('RecPass');
    }
    
    function navigateRecUser() {
        navigation.navigate('RecUser');
    }

    async function logIn(){
        try {
            const response = await api.post('sessionsPatient', {User, Password});
            await AsyncStorange.setItem('user', User);
            await AsyncStorange.setItem('password', Password);
            
            navigation.navigate('Drawer', {
                screen: 'Home'
            });

        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return(

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
                <ScrollView showsVerticalScrollIndicator={false} fadingEdgeLength={0}>
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
                                placeholder="Usuário" 
                                value={User}   
                                onChangeText={e => setUser(e)}/>
                        </View>
                        <View style={Styles.input}>
                            <Feather style={Styles.inputIcon} name="lock" size={32} color="#fff" />
                                <TextInput 
                                style={Styles.inputText}
                                placeholder="Senha" 
                                secureTextEntry={true}
                                value={Password}   
                                onChangeText={e => setPassword(e)}
                                />
                        </View>
                        {/* <View style={Styles.row}>
                            <View style={Styles.checkboxCol}>
                                <CheckBox 
                                    disabled={false}
                                    value={isSelected}
                                    onValueChange={() => isSelected ? setSelection(false) : setSelection(true)} 
                                    style={Styles.checkbox} />
                                <Text style={Styles.checkboxText}>Lembrar de mim</Text>
                            </View>
                            <View style={Styles.linkCol}>
                                <TouchableOpacity style={Styles.passLink} onPress={navigateRecPass}>
                                        <Text style={Styles.passLinkText}>
                                            Esqueceu sua senha?
                                        </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.codLink} onPress={navigateRecUser}>
                                    <Text style={Styles.codLinkText}>
                                        Esqueceu seu código?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View> */}
                        <View style={Styles.buttonContainer}>
                            <TouchableOpacity style={Styles.button} onPress={logIn}>
                                <Text style={Styles.buttonText}>
                                    Entrar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
                         
    );
}