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
        flexDirection: 'row',
    },

    rowDataHeader: {
        justifyContent:'space-between',
        backgroundColor: '#60609e',
        borderRadius: 20,
        flex: 0.3,
    },

    rowDataHeaderItem: {
        borderColor: '#fff',
        borderBottomWidth: 1,
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },

    rowData: {
        flex: 0.7,
        borderRadius: 10,
    },

    rowDataContainer: {
        justifyContent: 'space-between',
        borderRightWidth: 1,
        width: 90,
        borderRadius: 10,
    },

    rowDataContainerItem: {
        textAlignVertical: 'center',
        textAlign: 'center',
        flex: 1,
        borderBottomWidth: 1,
        borderRadius: 10,
    }

});