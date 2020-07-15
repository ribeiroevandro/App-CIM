import React, { useEffect, useState } from 'react';
import Styles from './styles';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
 

export default function Exams() {
    const [exam, setExam] = useState([]);
    const navigation = useNavigation();

    function menu() {
      navigation.toggleDrawer();
    }

   async function loadExams(){
    const userId = await AsyncStorage.getItem('user_id');
    const response = await api.get(`/listExams/${userId}`)
    setExam(response.data);
    console.log(response.data);
    }

    useEffect(() => {
       loadExams();
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
                    Exames
                </Text>
                <View style={Styles.patientContainer}>
                {/* <ScrollView contentContainerStyle={{flexDirection: 'column', width: 700}} horizontal={true}> */}
                    <View style={Styles.rowDataVertHeader}>
                        <Text style={Styles.textVertHeader}>Exame</Text>
                        <Text style={Styles.textVertHeader}>ABO-RH</Text>
                        <Text style={Styles.textVertHeader}>Glicemia</Text>
                        <Text style={Styles.textVertHeader}>Hb/Ht</Text>
                        <Text style={Styles.textVertHeader}>VDRL</Text>
                        <Text style={Styles.textVertHeader}>HIV</Text>
                        <Text style={Styles.textVertHeader}>Hepatite B</Text>
                        <Text style={Styles.textVertHeader}>Hepatite C</Text>
                        <Text style={Styles.textVertHeader}>Toxoplasmose</Text>
                        <Text style={Styles.textVertHeader}>Rubêola</Text>
                        <Text style={Styles.textVertHeader}>Outros</Text>
                    </View>

                    <View style={Styles.flatList}>
                        <FlatList 
                        data={exam}
                        keyExtractor={exams => String(exams.id)}
                        horizontal={true}
                        renderItem={({item: exam}) => (
                        <View style={Styles.rowDataContainer}>

                            <View style={Styles.rowDataHorHeader}>
                                <Text style={Styles.textHorHeader}>Data</Text>
                                <Text style={Styles.textHorHeader}>Result.</Text>
                            </View>
                            
                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateAboRh}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.aboRh}
                                </Text>
                            </View>

                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateGlicemia}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.glicemia}
                                </Text>
                            </View>
                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateHbHt}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.hbHt}
                                </Text>
                            </View>
                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateVdrl}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.vdrl}
                                </Text>
                            </View>
                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateHiv}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.hiv}
                                </Text>
                            </View>
                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateHepatiteB}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.hepatiteB}
                                </Text>
                            </View>
                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateHepatiteC}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.hepatiteC}
                                </Text>
                            </View>
                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateToxoplasmose}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.toxoplasmose}
                                </Text>
                            </View>
                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateRubeola}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.rubeola}
                                </Text>
                            </View>
                            <View style={Styles.rowData}>
                                <Text style={Styles.textData}>
                                    {exam.dateOutro}
                                </Text>
                                <Text style={Styles.textData}>
                                    {exam.outro}
                                </Text>
                            </View>

                        </View>

                            )}
                        />
                    </View>

                </View>
           </View>    
        </View>
    );
}