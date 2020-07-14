import React, { useEffect } from 'react';
import Styles from './styles';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import api from '../../services/api';
 



export default function Exams() {
    const navigation = useNavigation();

    function menu() {
      navigation.toggleDrawer();
    }

   // async function loadExams(){
    //    const userId = await AsyncStorage.getItem('user_id');
        // const response = await api.get(`/listPrenatal/${userId}`)
        // setPatient(response.data);

    //}

    //useEffect(() => {
     //   loadExams();
    //}, []);

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
                    <View style={Styles.rowDataContainer}>
                        <View style={Styles.rowDataHorHeader}>
                            <Text style={Styles.textHorHeader}>Data</Text>
                            <Text style={Styles.textHorHeader}>Result.</Text>
                            <Text style={Styles.textHorHeader}>Data</Text>
                            <Text style={[Styles.textHorHeader, {borderRightWidth: 0}]}>Result.</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData, {borderRightWidth: 0}]}>NA</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData, {borderRightWidth: 0}]}>NA</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData, {borderRightWidth: 0}]}>NA</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData,{borderRightWidth: 0}]}>NA</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData, {borderRightWidth: 0}]}>NA</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData, {borderRightWidth: 0}]}>NA</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData, {borderRightWidth: 0}]}>NA</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData, {borderRightWidth: 0}]}>NA</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData, {borderRightWidth: 0}]}>NA</Text>
                        </View>
                        <View style={Styles.rowData}>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={Styles.textData}>NA</Text>
                            <Text style={Styles.textData}>18/06/2020</Text>
                            <Text style={[Styles.textData, {borderRightWidth: 0}]}>NA</Text>
                        </View>
                    </View>
                </View>
           </View>    
        </View>
    );
}