import React from 'react';
import Styles from './styles';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';



export default function PreNatal() {
    const navigation = useNavigation();

    function menu() {
      navigation.toggleDrawer();
    }

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
                            <Text style={[Styles.rowDataHeaderItem, {borderRightWidth: 0}]}>
                                Obs.
                            </Text>
                        </View>
                            <FlatList 
                            data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}
                            keyExtractor={data => String(data)}
                            style={Styles.rowData} 
                            renderItem={() => (                      
                            <View style={Styles.rowDataContainer}>
                                <Text style={Styles.rowDataContainerItem}>
                                21/05/2019
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    NA
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    NA
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    NA
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    NA
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    NA
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    NA
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    NA
                                </Text>
                                <Text style={Styles.rowDataContainerItem}>
                                    NA
                                </Text>
                                <Text style={[Styles.rowDataContainerItem, {borderRightWidth: 0}]}>
                                    NA
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