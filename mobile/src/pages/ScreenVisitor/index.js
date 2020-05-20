import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import YouTube from 'react-native-youtube';

export default function ScreenVisitor() {

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
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

            <View style={Styles.row}>
                <View style={Styles.back}>
                    <TouchableOpacity style={Styles.backLink} onPress={navigateBack}>
                        <Feather  name="power" size={48} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={Styles.logo}>
                    <Image style={Styles.logoImage} source={logoImg} />
                </View>
            </View>

            <View style={Styles.content}>
                <Text style={Styles.header}>
                    Seja Bem Vindo
                </Text>
                <Text style={Styles.message}>
                    Desculpe! Você não possui videos disponiveis no momento.
                </Text>                    
            </View>
        
        </View>
    );

}