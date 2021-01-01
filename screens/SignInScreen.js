
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
import { useDispatch } from 'react-redux'
import { Switch } from 'react-native-switch'


const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNO_zyA60RnWxDU0byK9DMM5Wsntb3O2QJ9w&usqp=CAU"}

export default function SignInScreen({navigation}) {

    const dispatch = useDispatch()  
    const [username, setUsername] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [password, setPassword] = useState('')
    const handleUsername = (text) => {
        setUsername(text)
    }

    const handleRoomNumber = (text) => {
        setRoomNumber(text)
    }

    const handlePassword = (text) => {
        setPassword(text)
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
    const resetFields = () =>{
        setPassword('');
        setRoomNumber('');
        setUsername('');
    }

    const handleNavigation = () => {
        setUser()
        resetFields()
        password === 'password' ?
        navigation.navigate('All Requests') 
        :
        navigation.navigate('Option Screen')
    }

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
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
            {
            isEnabled === false ?
            <TextInput 
                onChangeText={handleRoomNumber}
                value={roomNumber}
                style={styles.roomNumber}
                placeholder="Enter Room Number"
                keyboardType={'numeric'}
                />
                :
                null
            }
            {
                isEnabled ? 
                <TextInput
                    style={styles.password}
                    onChangeText={handlePassword}
                    value={password}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                /> 
                :
                null
            }
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>EMPLOYEE?</Text>
                <Switch 
                    activeText={'Yes'}
                    inActiveText={'No'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    switchLeftPx={5}
                    switchRightPx={5}
                />
            </View>
            <View>
                <Button title="Sign In"
                    onPress={handleNavigation}
                    style={styles.signInButton}
                />
            </View>
            </ImageBackground>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    login: {
        alignSelf: 'center',
        fontSize: 20,
        paddingTop: 50
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 250,
        marginTop: 5,
        height: 35,

    },
    switchText: {
        color: 'red',
        marginRight: 5,
        marginTop: 3,
        fontSize: 18,
    },
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
        borderWidth: 2,
        backgroundColor: 'white',
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
        borderWidth: 2,
        backgroundColor: 'white'
        
        
    },
    password: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        fontSize: 20,
        borderWidth: 2,
        backgroundColor: 'white'   
    },
    image: {
        width: '100%',
        height: '100%'
    },
    signInButton: {
        fontSize: 25,
        justifyContent: 'center',
        marginTop: 25,
    }
    
})