import React from 'react'
import { View, ViewStyle, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


type props = {
    style : ViewStyle
    onClick : (params: any) => any
}

const BackButton = ({style, onClick} : props) => {
    return (
        <View style={[innerStyles.backButton, style]}>
                <TouchableOpacity onPress={onClick}>
                    <Icon name='arrow-back' size={30} color='white'/>
                </TouchableOpacity>
        </View>
    )
}

const innerStyles = StyleSheet.create({
    backButton : {
        
    },

    text : {
        color: 'white'
    }
})

export default BackButton;