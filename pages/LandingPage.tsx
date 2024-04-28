import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootParamList } from './RouteTypes';
import Icon from 'react-native-vector-icons/Octicons'



type Props = NativeStackScreenProps<RootParamList, 'Landing'>
// pass if user is logged in, no need, if user sees this then he is logged in
//^ is this intended behavior?
function Landing({route, navigation} : Props) : JSX.Element {

    return (
        <View style={[styles.page]}>
            <View style={styles.homeButton}>    
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon name='home' size={30} color='#FFF'/>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.pageTitle}>Select your workout</Text>

            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("WorkOut")} style={styles.workoutButton}>
                    <View style={styles.wButtonBorder}>
                        <Text style={styles.wButtonText}>Strength</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity style={styles.workoutButton}>
                    <View style={styles.wButtonBorder}>
                        <Text style={styles.wButtonText}>Endurance</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity style={styles.workoutButton}>
                    <View style={styles.wButtonBorder}>
                        <Text style={styles.wButtonText}>Power</Text>
                    </View>
                </TouchableOpacity >
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    page: {
        
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black'
    },

    pageTitle : {
        marginTop: 40,
        fontSize: 43,
        color: '#FFF',
        textAlign: 'center',
        height: '15%',
        width: '68%',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: -1.29,
        marginBottom: 60
        // leadingTrim: 'both',
        // textEdge: 'cap',
    },

    homeButton : {
        alignItems: 'flex-start', 
        width: '100%', 
        marginTop: 20, 
        marginLeft: 40
    },

    homeButtonText : {
        color: '#FFF'
    },

    workoutButton : {
        flexShrink: 0,
        marginVertical: 13,
        width: '80%'
    },

    wButtonBorder : {
        flexShrink: 0,
        borderRadius: 43,
        borderWidth: 2,
        borderColor: '#FFF',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },

    wButtonText : {
        color: '#FFF', 
        textAlign: 'center',
        // leadingTrim: 'both',
        // textEdge: 'cap',
        fontFamily: 'NeueHaasDisplay-Roman',
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: -0.5,
        textTransform: 'uppercase',
    },

    mainContainer : {
        height: '33%',
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },
})


export default Landing;