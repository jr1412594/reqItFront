import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ItemContainer from '../components/ItemContainer'
import { useSelector, useDispatch } from 'react-redux'

const userBaseUrl = 'http://localhost:7000/users/'

export default function HomeScreen({navigation}) {
    const user = useSelector(state => state.username)
    const reqItems = useSelector(state => state.reqItems)
    const dispatch = useDispatch()
    

    const newUser = {
        name: user.name,
        room_number: user.room_number
    }

    const navigateRequest = () => {
        navigation.navigate('Req List')
    }

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
        .then(user => dispatch({type: 'CREATE_USER', userObject: {id: user.id, name: user.name, room_number: user.room_number }}))
    }, []);

    return (
        <View style={styles.container}>
            
            <Button 
                title="Your Requests" 
                style={styles.reqButton} 
                onPress={navigateRequest}
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
        width: '100%',
        borderTopWidth: 1,
    },
    reqButton: {
        textAlign: 'right',
        color: 'red',
    }
});