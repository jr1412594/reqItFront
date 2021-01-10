import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ItemContainer from '../components/ItemContainer'
import { useSelector, useDispatch } from 'react-redux'
import { HOST_WITH_PORT } from '../environment';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        fetch(`${HOST_WITH_PORT}/users`, {
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
                <TouchableOpacity onPress={navigateRequest}>
            <View style={styles.buttonContainer}>
                
                <Text
                    style={styles.reqButton} 
                    >
                        Your Requests 
                </Text>
            </View>
                        </TouchableOpacity>
            <ItemContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
 
    },
    container: {
        flex: 1,
        backgroundColor: '#f7fdfc',
        // width: '100%',
        
    },
    reqButton: {
        textAlign: 'center',
        color: '#272643',
        paddingTop: 13,
        fontSize: 20,
        fontFamily: 'ContrailOne'
    },
    buttonContainer: {
        backgroundColor: '#ecf8f8',
        // borderWidth: 1,
        height: 50,

    }
});