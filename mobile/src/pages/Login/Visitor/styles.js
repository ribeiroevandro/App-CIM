import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#9999cc',
    },

    back: {
        alignSelf:'flex-start',
        top: 0,
    },

    form: {
        paddingTop: 10,
        alignItems: 'center',
    },

    header: {
        fontWeight: 'bold',
        fontSize: 38,
        color: '#fff',
        paddingBottom: 20,
    },

    input: {
        flexDirection: 'row',
        marginTop: 20,
        width: 300,
        alignItems: 'center',
    },

    inputIcon: {
        backgroundColor: '#000',
        padding: 8,
    },

    inputText: {
        backgroundColor: '#fff',
        flex: 1,
        height: 50,
        paddingLeft: 10,
    },

    button: {
        marginTop: 40,
        backgroundColor:'#000000',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: 150,
    },

    buttonText: {
        color: '#fff',
        fontSize: 18
    },

});