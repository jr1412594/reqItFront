import React, { useState } from 'react'
import 
    { 
        View, 
        Text, 
        Button, 
        StyleSheet, 
        TextInput,
        ImageBackground,
    } 
    from 'react-native'
import { useDispatch, useSelector } from 'react-redux'


const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_X4rhxlJPatFlNWi68Z_iVDWUWa6O6Ua2A&usqp=CAU"}

export default function SignInScreen({navigation}) {

    const dispatch = useDispatch()  
    const [username, setUsername] = useState('')
    const [roomNumber, setRoomNumber] = useState('')

    // console.log(user, 'when does this fire off')

    const handleUsername = (text) => {
        setUsername(text)
    }

    const handleRoomNumber = (text) => {
        setRoomNumber(text)
    }

    const setUser = () => {
        dispatch({
            type: 'SET_USERNAME', 
            user: {
                name: username, 
                room_number: roomNumber
                }
        })
    }

    const handleNavigation = () => {
        setUser()
        navigation.navigate('Req Items')
    }
    return (

        <>
        <View style={styles.signInContainer}>
            <ImageBackground source={image} style={styles.image}>

            <Text style={styles.login}>
                ReqIt App
            </Text>
            <TextInput 
                onChangeText={handleUsername}
                value={username}
                style={styles.userName}
                placeholder="Enter Name"
            />
            <TextInput 
                onChangeText={handleRoomNumber}
                value={roomNumber}
                style={styles.roomNumber}
                placeholder="Enter Room Number"
                keyboardType={'numeric'}
            />
            <Button title="Sign In"
                onPress={handleNavigation}
                style={styles.signInButton}
            />
            </ImageBackground>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    // login: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignSelf: 'baseline'
    // },
    signInContainer: {
        flex: 1,
        resizeMode: 'cover',
        marginBottom: 0,
    },
    userName: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 200,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        fontSize: 20,
        // color: 'white',
        borderWidth: 2,
        backgroundColor: 'white'
    },
    roomNumber: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        fontSize: 20,
        // color: 'white',
        borderWidth: 2,
        backgroundColor: 'white'

        
    },
    image: {
        width: '100%',
        height: '100%'
    },
    signInButton: {
        fontSize: 25,
    }
    
})