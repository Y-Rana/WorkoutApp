import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { RootParamList } from "./RouteTypes";

type Props = NativeStackScreenProps<RootParamList, 'Register'>
const RegisterPage = ({route, navigation} : Props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = () => {
        //code to handle navigation
    }

    const onSubmit = () => {
        //Do something with username and password
        //Need to still add constraints for password and username
        console.log('Created!')
        console.log('Username: ' + username + ' Password: ' + password)
        navigate()
    }


    return (
        <View style={styles.page}> 
            <Text style={styles.heading}>Create an account</Text>
            <View>
                <View>
                    <Text style={styles.inputHeading}>Enter a username:</Text>
                    <TextInput
                        onChangeText={setUsername}
                        value={username}
                        placeholder="Enter a username"
                        placeholderTextColor={'black'}
                        style={styles.textInput}></TextInput>
                </View>
                <View>
                    <Text style={styles.inputHeading}>Enter your email:</Text>
                    <TextInput
                    onChangeText={setEmail}
                    value={username}
                    placeholder="Enter your email"
                    placeholderTextColor={'black'}
                    style={styles.textInput}>
                    </TextInput>
                </View>
                
                <View>
                    <Text style={styles.inputHeading}>Enter a password: </Text>
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter a password"
                        style={styles.textInput}
                        placeholderTextColor={'black'}></TextInput>
                </View>

                <View>
                    <Text style={styles.inputHeading}>Confirm your password: </Text>
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={setConfirmPassword}
                        value={password}
                        placeholder="Confirm your password"
                        style={styles.textInput}
                        placeholderTextColor={'black'}
                        onSubmitEditing={onSubmit}></TextInput>
                </View>
                </View>
                {/* More elaborate constraints to be added here */}
        
            <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
                <Text style={styles.submitText}>Register</Text>        
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

    form : {
        alignItems: 'flex-start',
        height: '100%',
        width : '100%',

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
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'NeueHaasDisplay-Light',
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        width: 300,
        borderRadius: 30,
        paddingHorizontal: 20
    },

    inputHeading: {
        marginTop: '10%',
        fontSize: 20,
        fontFamily: 'NeueHaasDisplay-Mediu',
        color: 'white',
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
    }
})


export default RegisterPage