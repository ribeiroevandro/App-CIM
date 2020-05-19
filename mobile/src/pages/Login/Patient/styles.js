import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    newContainer: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#9999cc',
    },

    container: {
        
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor:'#000000',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 10
    },

    buttonText: {
        color: '#fff',
        fontSize: 18
    },

    input: {
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },

    inputIcon: {
        padding: 10,
        backgroundColor: '#000',
    },

    inputText: {
        paddingTop: 10,
        paddingRight: 200,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
    },

    header: {
        fontWeight: 'bold',
        fontSize: 48,
        color: '#fff',
        paddingBottom: 15,
    }

});