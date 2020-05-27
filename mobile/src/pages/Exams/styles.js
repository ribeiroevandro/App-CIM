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
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
    },

    rowDataHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 30,
        height: 60,
        paddingLeft: 20,
        paddingRight: 30,
        alignItems: 'center',
        backgroundColor: '#60609e',
    },

    rowDataHeaderExam: {
        flex: 1,
        height: 60,
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    rowDataHeaderDate: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#fff',
        paddingLeft: 15,
        height: 60,
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    rowDataHeaderResult: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#fff',
        paddingLeft: 15,
        height: 60,
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    rowData: {
    },

    rowDataContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingLeft: 20,
        paddingRight: 30,
        height: 40,
        borderRadius: 10,
    },

    rowDataContainerItem: {
        flex: 1,
        textAlign: 'left',
        textAlignVertical: 'center',
        
    }


});