import React from 'react';
import Styles from './styles';
import logoImg from '../../assets/logo.png';
import whats from '../../assets/whatsapp.png'
import email from '../../assets/gmail.png'
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function Video() {

    const navigation = useNavigation();

    function menu() {
      navigation.toggleDrawer();
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
                    <TouchableOpacity style={Styles.backLink} onPress={menu}>
                        <Feather  name="menu" size={48} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={Styles.logo}>
                    <Image style={Styles.logoImage} source={logoImg} />
                </View>
            </View>
            <View style={Styles.content}>
                <Text style={Styles.header}>
                    Dados do Paciente
                </Text>
                <View style={Styles.patientContainer}>
                        <View style={Styles.patientVisitor}>
                            <Text style={Styles.patientVisitorHeader}>
                                ID Visitante
                            </Text>
                            <Text style={Styles.patientVisitorValue}>
                                asasasasas
                            </Text>
                        </View>
                        <View style={Styles.patientName}>
                            <Text style={Styles.patientNameHeader}>
                                Nome
                            </Text>
                            <Text style={Styles.patientNameValue}>
                                Miriam Crisitna B. Rodrigues
                            </Text>
                        </View>
                        <View style={Styles.patientRow}>
                            <View style={Styles.patientLastGestation}>
                                <Text style={Styles.patientLastGestationHeader}>
                                    Gestação Anterior
                                </Text>
                                <Text style={Styles.patientLastGestationValue}>
                                    0
                                </Text>
                            </View>
                            <View style={Styles.patientLastAbortion}>
                                <Text style={Styles.patientLastAbortionHeader}>
                                    Abortos Anteriores
                                </Text>
                                <Text style={Styles.patientLastAbortionValue}>
                                    0
                                </Text>
                            </View>
                        </View>
                        <View style={Styles.patientBirthType}>
                            <Text style={Styles.patientBirthTypeHeader}>
                                Tipo de parto
                            </Text>
                            <Text style={Styles.patientBirthTypeValue}>
                                Cesária
                            </Text>
                        </View>
                        <View style={Styles.patientRow}>
                            <View style={Styles.patientLastMenstruation}>
                                <Text style={Styles.patientLastMenstruationHeader}>
                                    Data da Ultima{'\n'}
                                    Menstruação
                                </Text>
                                <Text style={Styles.patientLastMenstruationValue}>
                                    01/01/2020
                                </Text>
                            </View>
                            <View style={Styles.patientBirthProvided}>
                                <Text style={Styles.patientBirthProvidedHeader}>
                                    Data Prevista{'\n'}do Parto
                                </Text>
                                <Text style={Styles.patientBirthProvidedValue}>
                                    08/09/2020
                                </Text>
                            </View>
                        </View>
                </View>                    
            </View>
            <View style={Styles.contact}>
                <View style={Styles.contactHeader}>
                    <Text style={Styles.contactHeaderText}>
                        Para mais informações entre em contato
                    </Text>
                </View>

                <View style={Styles.contactButton}>
                    <TouchableOpacity style={{marginRight: 20}} onPress={()=>{}}>
                        <Image style={{margin: 10, height: 58, width: 58}} source={whats} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}}>
                        <Image style={{margin: 10, height: 58, width: 58}} source={email} />
                    </TouchableOpacity>
                </View>
            </View>
        
        </View>
    );

}