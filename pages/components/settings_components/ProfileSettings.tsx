import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { CustomizationParamList, RootParamList, SettingsParamList } from '../../RouteTypes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CompositeScreenProps } from '@react-navigation/native'

type ProfProps = CompositeScreenProps<
    NativeStackScreenProps<SettingsParamList, 'Profile'>,
    CompositeScreenProps<NativeStackScreenProps<CustomizationParamList>, NativeStackScreenProps<RootParamList>>
>

const ProfileSettings = ({route, navigation}: ProfProps) => {
    return (
        <View style={styles.page}>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
                <TouchableOpacity style={{marginRight : 40, marginTop : 20}} onPress={() => navigation.navigate('CustomizerStart')}>
                    <FeatherIcon name='arrow-right' size={30} color='white'/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.content}>
                <Text style={styles.pageTitle}>ACCOUNT</Text>
                <View style={[styles.pfpSection, {borderTopWidth: 2}]}>
                    <FAIcon name='user-circle' size={45} color='white'/>
                    <View>
                        <Text style={styles.sectionHeader}>PROFILE PICTURE</Text>
                        <TouchableOpacity>
                            <Text style={[styles.sectionHeader,{textAlign: 'right'}]}>EDIT</Text>
                        </TouchableOpacity>    
                    </View>
                </View>

                <Text style={[styles.sectionHeader, {borderTopWidth: 1, borderColor: 'white', paddingVertical: 10}]}>NAME</Text>
                <View style={{borderBottomWidth: 1, borderColor: 'white', paddingBottom: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{width: '49%'}}>
                            <TextInput 
                                onChangeText={()=>{}}
                                value={''}
                                placeholder="Yash"
                                placeholderTextColor={'#8C8C8C'}
                                style={styles.textInput}>    
                            </TextInput>
                            <Text style={styles.textUnder}>First Name</Text>
                        </View>
                        <View style={{width: '49%'}}>
                            <TextInput  
                                onChangeText={()=>{}}
                                value={''}
                                placeholder="Rana"
                                placeholderTextColor={'#8C8C8C'}
                                style={styles.textInput}>
                            </TextInput>
                            <Text style={styles.textUnder}>Last Name</Text>
                        </View>
                    </View>
                    
                </View>

                <View style={styles.dobSection}>
                    <Text style={styles.sectionHeader}>DATE OF BIRTH</Text>
                    <TextInput  
                        onChangeText={()=>{}}
                        value={''}
                        placeholder="18/06/2004"
                        placeholderTextColor={'#8C8C8C'}
                        style={[styles.textInput,{width: '49%'}]}>
                    </TextInput>
                </View>
                
                <View style={styles.emailSection}>
                    <Text style={styles.sectionHeader}>EMAIL</Text>
                    <TextInput  
                        onChangeText={()=>{}}
                        value={''}
                        placeholder="yasrana@gmail.com"
                        placeholderTextColor={'#8C8C8C'}
                        style={[styles.textInput,{width: '100%'}]}>
                    </TextInput>
                </View>
                
                <TouchableOpacity style={styles.passwordSection}>
                    <Text style={styles.changePasswordText}>Change password</Text>
                    <FeatherIcon name='arrow-up-right' size={20} color={'#8C8C8C'}/>
                </TouchableOpacity>
                
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    content: {
        width: '80%',
        height: '100%',
        marginHorizontal: 10
    },

    pageTitle: {
        color: 'white',
        fontFamily: 'NeueHaasDisplay-Roman',
        fontSize: 34,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: -0.4,
        textTransform: 'uppercase',
        marginBottom: 20
    },

    pfpSection: {
        borderBottomWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    },

    dobSection: {
        borderBottomWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 10
    },

    emailSection: {
        borderBottomWidth: 1,
        borderColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 10
    },

    passwordSection: {
        borderBottomWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },

    sectionHeader: {
        color: 'white',
        fontFamily: 'NeueHaasDisplay-Roman',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: -0.5,
        textTransform: 'uppercase',
    },

    textInput: {
        backgroundColor: '#2B2B2B',
        borderRadius: 39,
        marginTop: 10,
        marginBottom: 5,
        paddingHorizontal: 10,
        textAlign: 'left',
        fontFamily: 'NeueHaasDisplay-Roman',
    },

    textUnder: {
        color: '#8C8C8C',
        fontSize: 14,
        fontFamily: 'NeueHaasDisplay-Roman'
    },

    changePasswordText: {
        color: '#8C8C8C',
        fontSize: 20,
        fontFamily: 'NeueHaasDisplay-Roman'
    }
})

export default ProfileSettings
