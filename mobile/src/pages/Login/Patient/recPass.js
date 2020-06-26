import React from 'react';
import Styles from './styles';
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function RecPass() {
    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

  return(
        <DismissKeyboard>
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
                <View style={Styles.back}>
                    <TouchableOpacity style={Styles.backLink} onPress={navigateBack}>
                        <Feather  name="chevron-left" size={64} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{ 
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 0.8,
                }}>
                    
                    <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 40, textAlign: 'center', width: 300, marginBottom: 40, }}>
                        Para recuperar sua Senha digite seu Usuário
                    </Text>
                    <View style={{flexDirection: 'row', width: 300, marginBottom: 20,}}>
                        <Feather style={Styles.inputIcon} name="user" size={32} color="#fff" />
                        <TextInput 
                        style={Styles.inputText}
                        placeholder="Usuário" />
                    </View>
                    <TouchableOpacity 
                    style={Styles.button} 
                    onPress={() => {}}>
                        <Text style={Styles.buttonText}>
                            Recuperar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DismissKeyboard>
    );
}