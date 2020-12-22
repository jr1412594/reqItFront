import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ItemContainer from '../components/ItemContainer'
import { useSelector } from 'react-redux'

const userBaseUrl = 'http://localhost:7000/users/'

export default function HomeScreen({navigation}) {
    const user = useSelector(state => state.username)
    
    const newUser = {
        name: user.name,
        room_number: user.room_number
    }
    console.log(newUser, 'if im lucky')
    useEffect (() => {
        fetch(userBaseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(result => console.log(result))
    }, []);

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