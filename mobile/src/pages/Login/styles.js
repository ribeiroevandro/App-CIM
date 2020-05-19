import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#9999cc',
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
    }

});