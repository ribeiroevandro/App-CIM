import React, { useEffect, useState } from 'react';
import Styles from './styles';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';


export default function PreNatal() {
    const [prenatal, setPrenatal] = useState([]);
    const navigation = useNavigation();

    function menu() {
      navigation.toggleDrawer();
    }

    async function loadPrenatal(){
        const userId = await AsyncStorage.getItem('user_id');
        const response = await api.get(`/listPrenatal/${userId}`)
        setPrenatal(response.data);
        console.log(response.data);
        }
    
        useEffect(() => {
            loadPrenatal();
        }, []);
 
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
                    Pré-Natal
                </Text>
                <View style={Styles.patientContainer}>
                    <ScrollView contentContainerStyle={{flexDirection: 'column', width: 700}} horizontal={true}>
                        <View style={Styles.rowDataHeader}>
                            <Text style={Styles.rowDataHeaderItem}>
                                Data
                            </Text>
                            <Text style={Styles.rowDataHeaderItem}>
                                IG
                            </Text>
                            <Text style={Styles.rowDataHeaderItem}>
                                AU
                            </Text>
                            <Text style={Styles.rowDataHeaderItem}>
                                PA
                            </Text>
                            <Text style={Styles.rowDataHeaderItem}>
                                Peso
                            </Text>
                            <Text style={Styles.rowDataHeaderItem}>
                                BCF
                            </Text>
                            <Text style={Styles.rowDataHeaderItem}>
                                APRES
                            </Text>
                            <Text style={Styles.rowDataHeaderItem}>
                                EDEMA
                            </Text>
                            <Text style={Styles.rowDataHeaderItem}>
                                MF
                            </Text>
                            
                        </View>
                            <FlatList 
                            data={prenatal}
                            keyExtractor={prenatals => String(prenatals.id)}
                            style={Styles.rowData} 
                            renderItem={({item: prenatals}) => (                      
                            <View style={Styles.rowDataContainer}>
                                <Text style={Styles.rowDataContainerItem}>
                                 {prenatals.dateP}
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    {prenatals.ig}
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    {prenatals.au}
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    {prenatals.pa}
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    {prenatals.peso}
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    {prenatals.bcf}
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    {prenatals.apres}
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    {prenatals.edema}
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    {prenatals.mf}
                                </Text>
                                
                            </View>
                            )}
                            />
                    </ScrollView>
                </View>
           </View>    
        </View>
    );
}