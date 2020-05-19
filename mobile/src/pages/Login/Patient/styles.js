import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

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
        marginTop: 10,
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

    checkboxRow: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkbox: {
        left: -22,
        tintColor: '#000'
    },

    checkboxText: {
        right: 20,
    },

    checkboxLink: {
        left: 15,
    },

    codLink: {
        left: 80,
    },

    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    button: {
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

    registerLink: {
        marginTop: 10,
    }


    // newContainer: {
    //     flex: 1,
    //     paddingTop: Constants.statusBarHeight + 15,
    //     backgroundColor: '#9999cc',
    // },

    // container: {
        
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },


    // input: {
    //     marginTop: 15,
    //     flexDirection: 'row',
    //     backgroundColor: '#fff',
    // },

    // inputIcon: {
    //     padding: 10,
    //     backgroundColor: '#000',
    // },

    // inputText: {
    //     paddingTop: 10,
    //     paddingRight: 200,
    //     paddingBottom: 10,
    //     paddingLeft: 10,
    //     backgroundColor: '#fff',
    // },

    // header: {
    //     fontWeight: 'bold',
    //     fontSize: 48,
    //     color: '#fff',
    //     paddingBottom: 15,
    // }

});