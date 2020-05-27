import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#9999cc',
    },

    row: {
        flexDirection: 'row',
    },

    back: {
        flex: 1,
        alignItems: 'flex-start',
        top: 10,
        left: 15,
        justifyContent: 'center',
    },

    logo: {
        flex: 1,
        alignItems: 'flex-end',
        top: 10,
        right: 15,
    },

    logoImage: {
        width: 80,
        height: 65,
    },

    content: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 30,
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },

    header: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        textAlign: 'left',
        marginLeft: 25,
    },

    patientContainer: {
        backgroundColor: '#bebeeb',
        flex: 1,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 15,
        paddingTop: 20,
        paddingRight: 15,
        paddingBottom: 20,
        justifyContent: 'space-between',
    },

    patientRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    patientVisitor: {
    },

    patientVisitorHeader: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    patientVisitorValue: {
        fontSize: 16,
        marginLeft: 10,
    },

    patientName: {
    },

    patientNameHeader: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    patientNameValue: {
        fontSize: 16,
        marginLeft: 10,
    },

    patientLastGestation: {
    },
    
    patientLastGestationHeader: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    patientLastGestationValue: {
        fontSize: 16,
        marginLeft: 10,
    },

    patientLastAbortion: {
    },

    patientLastAbortionHeader: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    patientLastAbortionValue: {
        fontSize: 16,
        marginLeft: 10,
    },

    patientBirthType: {
    },

    patientBirthTypeHeader: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    patientBirthTypeValue: {
        fontSize: 16,
        marginLeft: 10,
    },

    patientLastMenstruation: {
    },

    patientLastMenstruationHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },

    patientLastMenstruationValue: {
        fontSize: 16,
        textAlign: 'center',
    },
    
    patientBirthProvided: {
    },

    patientBirthProvidedHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },

    patientBirthProvidedValue: {
        fontSize: 16,
        textAlign: 'center',
    },

    contact: {
        flex: 0.3,
        backgroundColor: '#fff',
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },

    contactHeader: {
        backgroundColor: '#60609e',
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
    },

    contactHeaderText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },

    contactButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

});