import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

type CustomProps = {
    text: string,
    color: string,
    duration: number //0 if no duration specified
}


const CustomTool = ({text, color, duration} : CustomProps) => {
    if(duration !== 0) {
        setTimeout(()=> console.log('next'), duration * 1000)
    }
    
    return(
        <View style={[styles.page, {backgroundColor: color}]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    text: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: '600', /* 57.28px */
        letterSpacing: -1.92,
    }
})

export default CustomTool