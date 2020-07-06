import React, { useState} from 'react';
import Styles from './styles';
import { Feather } from '@expo/vector-icons'
import logoImg from '../../../assets/logo.png';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation  } from '@react-navigation/native';
import { View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import AsyncStorange from '@react-native-community/async-storage';
import api from '../../../services/api';

export default function LoginVisitor() {
    
    const [IdVisitor, setIdVisitor] = useState('');

    const navigation = useNavigation();


   async function Login(){

        try {
            
            const response = await api.post('sessionsVisit', {IdVisitor});
            await AsyncStorange.setItem('IdVisitor', IdVisitor);
            navigation.navigate('ScreenVisitor');

        } catch (err) {
            alert('Falha no login, tente novamente.');
        }

    }

    function navigateBack() {
        navigation.goBack();
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
                        value={IdVisitor}   
                        onChangeText={e => setIdVisitor(e)}/>
                    </View>
                    <TouchableOpacity 
                    style={Styles.button} 
                    onPress={Login}>
                        <Text style={Styles.buttonText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
            
    );
}