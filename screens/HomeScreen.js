import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ItemContainer from '../components/ItemContainer'
import { useSelector } from 'react-redux'


export default function HomeScreen({navigation}) {
    const user = useSelector(state => state.username)
    console.log(user,'not jr')
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