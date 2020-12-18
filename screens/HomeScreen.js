import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ItemContainer from '../components/ItemContainer'



export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Button 
                title="Your Requests" 
                style={styles.reqButton} 
                onPress={() => navigation.navigate('Req List')}
                />
            <ItemContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    },
    reqButton: {
        textAlign: 'right'

    }
});