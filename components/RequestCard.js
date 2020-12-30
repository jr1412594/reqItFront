import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
export default function RequestCard({request}) {
    console.log(request, 'reqCard')
    return (
        <View>
                <Text>{request.item.name}</Text> 
                <Image 
                style={styles.reqImage}
                source={{uri: request.item.image}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    reqImage: {
        width: '100%',
        height: 210,
        marginBottom: 10,
        marginLeft: 1,
        marginRight: 20,
        borderRadius: 15,
        borderWidth: 0.5,
    }
})