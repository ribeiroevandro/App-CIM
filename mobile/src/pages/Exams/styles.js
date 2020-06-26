import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#54affd',
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
        flexDirection: 'row',
    },

    rowDataVertHeader: {
        flex: 0.3,
        justifyContent: 'space-between',
        backgroundColor: '#0163b6',
        borderRadius: 20,
    },

    textVertHeader: {
        flex: 1,
        fontSize: 12,
        textAlignVertical: 'center',
        paddingLeft: '10%',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        fontWeight: 'bold',
    },

    rowDataHorHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    textHorHeader: {
        flex: 1,
        fontSize: 12,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderRightWidth: 1,
    },
    
    rowDataContainer: {
        flex: 0.7,
    },

    rowData: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textData: {
        flex: 1,
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderBottomWidth: 1,
        borderRightWidth: 1,
    },
});