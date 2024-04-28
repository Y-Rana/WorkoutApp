import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { RootParamList } from "./RouteTypes";

type Props = NativeStackScreenProps<RootParamList, 'Login'>

const LoginPage = ({route, navigation} : Props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emptyUsername, setEmptyUsername] = useState(false)
    const [emptyPassword, setEmptyPassword] = useState(false)

    const navigateToRegister = () => {
        navigation.navigate('Register')
    }

    const onSubmit = () => {
        //Do something with username and password
        //Need to still add constraints for password and username
        console.log('Submitted!')
        console.log('Username: ' + username + ' Password: ' + password)
        const validFields = validation()

        if (validFields) {
            navigation.replace('Landing')
        }
    }

    function validation() : boolean{
        if (!username.trim()) {
            setEmptyUsername(true)
        }

        if(!password.trim()) {
            setEmptyPassword(true)
        }

        return !(!username.trim() || !password.trim())
    }

    useEffect(()=>{}, [emptyPassword, emptyUsername])


    return (
        <View style={styles.page}> 
            <Text style={styles.heading}>Log in to your account</Text>
            <View style={{width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',}}>

                {emptyUsername ? <Text style={styles.errEmptyField}>Please enter a username</Text> : null}
                <TextInput
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Username or email"
                    placeholderTextColor={'black'}
                    style={styles.textInput}></TextInput>
                {emptyPassword ? <Text style={styles.errEmptyField}>Please enter a password</Text> : null}
                <TextInput
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    style={styles.textInput}
                    placeholderTextColor={'black'}
                    onSubmitEditing={onSubmit}></TextInput>
                {/* More elaborate constraints to be added here */}
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
                <Text style={styles.submitText}>Log in</Text>        
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerButton} onPress={navigateToRegister}>
                <Text style={styles.registerText}>Don't have an account? Create one</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', //'flex-start',
    },

    heading : {
        //marginTop: '20%',
        fontSize: 42,
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontWeight: '600',
        fontStyle: 'normal',
        color: 'white',
        textAlign: 'left'
    },

    textInput: {
        marginTop: 15,
        fontSize: 20,
        fontFamily: 'NeueHaasDisplay-Light',
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        width: "60%",
        borderRadius: 30,
        paddingHorizontal: 20
    },

    submitButton : {
        backgroundColor: '#3C8AFF',
        borderColor: '#3C8AFF',
        borderWidth: 1,
        width: "60%",
        borderRadius: 30,
        marginTop: 30,
        padding: 10
    },

    submitText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'NeueHaasDisplay-Mediu',
        color: 'white',
    },

    registerButton : {
        marginTop: 20,
        backgroundColor: 'black'
    },

    registerText : {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'NeueHaasDisplay-Mediu',
        color: '#3C8AFF',
    },

    errEmptyField : {
        marginTop: 15,
        textAlign: 'left',
        fontSize: 20,
        fontFamily: 'NeueHaasDisplay-Mediu',
        color: '#FF461E',
    }
})


export default LoginPage