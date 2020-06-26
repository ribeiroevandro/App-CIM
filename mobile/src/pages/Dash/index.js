import React, { useState } from 'react';
import Styles from './styles';
import logoImg from '../../assets/logo.png';
import whats from '../../assets/whatsapp.png'
import email from '../../assets/gmail.png'
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, Clipboard, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function Dash() {

    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);

    const idVisitor = 'asasasasas';

    function menu() {
      navigation.toggleDrawer();
    }

    async function copyIdVisitor () {
        Clipboard.setString(idVisitor);
        Alert.alert('Sucesso','ID do visitante copiado!');
      };

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
            <ScrollView style={Styles.scroll}>
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
                            <View style={{backgroundColor: '#fff', borderRadius: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text style={Styles.patientVisitorValue}>
                                    asasasasas
                                </Text>
                                <TouchableOpacity 
                                style={{backgroundColor: '#0163b6', borderRadius: 15, padding: 8}}
                                onPress={()=>{copyIdVisitor()}}
                                >
                                    <Text style={{color: '#fff'}}>
                                        Copiar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={Styles.patientName}>
                            <Text style={Styles.patientNameHeader}>
                                Nome
                            </Text>
                            <Text style={Styles.patientNameValue}>
                                Miriam Crisitna B. Rodrigues
                            </Text>
                        </View>
                        <View style={[Styles.row, {justifyContent: 'space-between', marginTop: 10, alignItems: 'center',}]}>
                            <View style={Styles.row}>
                                <Text>0</Text>
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>G</Text>
                            </View>
                            <View style={Styles.row}>
                                <Text>0</Text>
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>P</Text>
                            </View>
                            <View style={[Styles.row, {alignItems: 'center'}]}>
                                <Text style={{fontWeight: 'bold'}}>(Cesária</Text>
                                <CheckBox 
                                    disabled={false}
                                    value={isSelected}
                                    onValueChange={() => isSelected ? setSelection(false) : setSelection(true)} 
                                    style={Styles.checkbox} />
                                <Text style={{fontWeight: 'bold'}}>Normal</Text>
                                <CheckBox 
                                    disabled={false}
                                    value={isSelected}
                                    onValueChange={() => isSelected ? setSelection(false) : setSelection(true)} 
                                    style={Styles.checkbox} />
                                <Text style={{fontWeight: 'bold'}}>)</Text>
                            </View>
                            <View style={Styles.row}>
                                <Text>0</Text>
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>P</Text>
                            </View>
                        </View>
                        <View style={[Styles.row, {justifyContent: 'space-between', marginTop: 10}]}>
                            <Text style={{fontWeight: 'bold'}}>DUM</Text>
                            <Text>25/06/2020</Text>
                            <Text style={{fontWeight: 'bold'}}>DPP</Text>
                            <Text>25/12/2020</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold', marginTop: 10}}>Observação</Text>
                            <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                        </View>
                    </View>                    
                </View>
                <View style={Styles.contact}>
                    <View style={Styles.contactHeader}>
                        <Text style={Styles.contactHeaderText}>
                            Para mais informações entre em contato
                        </Text>
                    </View>
                    <View style={Styles.contactButtonRow}>
                        <TouchableOpacity style={Styles.contactButton} onPress={()=>{}}>
                            <Image style={{margin: 10, height: 58, width: 58}} source={whats} />
                            <Text style={{textAlign: 'center',}}>Dr. Jones M.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.contactButton} onPress={()=>{}}>
                            <Image style={{margin: 10, marginHorizontal: 25, height: 58, width: 58}} source={whats} />
                            <Text style={{textAlign: 'center',}}>Dr. Marcelo M.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.contactButton} onPress={()=>{}}>
                            <Image style={{margin: 10, height: 58, width: 58}} source={email} />
                            <Text style={{textAlign: 'center',}}>E-mail Clínica</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}