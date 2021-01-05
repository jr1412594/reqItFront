
import React, { useState } from 'react'
import 
    { 
        View, 
        Text, 
        Button, 
        StyleSheet, 
        TextInput,
        ImageBackground,
        Alert,
    } 
    from 'react-native'

import { useDispatch } from 'react-redux'
import { Switch } from 'react-native-switch'


const image = { uri: "https://www.hilton.com/im/en/CHIWAWA/11118487/one-bedroom-suite-bedroom-waldorf-astoria-chicago-cory-phillips.jpg?impolicy=crop&cw=4028&ch=2983&gravity=NorthWest&xposition=236&yposition=9&rw=424&rh=314"}

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
        if(password === 'password'){
            navigation.navigate('Admin Screen')
        } else if (password === ''){
            navigation.navigate('Option Screen')
        } else {
            Alert.alert('Invalid Credentials')
        }
    }

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    return (

        <>
        <View style={styles.signInContainer}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.topText}>
                    Req_it 
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

    topText: {
        alignSelf: 'center',
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 50,
        height: 200,
        fontFamily: 'ContrailOne',
        color: '#344055'
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 215,
        marginTop: 10,
        height: 35,

    },
    switchText: {
        color: 'red',
        marginRight: 10,
        marginTop: 3,
        fontSize: 18,
        fontFamily: 'ContrailOne'
    },
    signInContainer: {
        flex: 1,
        marginBottom: 0,
    },
    userName: {
        color: '#344055',
        fontFamily: 'ContrailOne',
        height: 40,
        borderColor: '#766e87',
        borderWidth: 3,
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#131316",
        shadowOffset: {
            width: 2,
            height: 10,
        },
        shadowOpacity: 0.75,
        shadowRadius: 13.16,
        elevation: 20,
    },
    roomNumber: {
        color: '#344055',
        fontFamily: 'ContrailOne',
        height: 40,
        borderColor: '#766e87',
        borderWidth: 3,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        paddingRight: 10,
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#131316",
        shadowOffset: {
            width: 2,
            height: 10,
        },
        shadowOpacity: 0.75,
        shadowRadius: 13.16,
        elevation: 20,
    },
    password: {
        color: '#344055',
        fontFamily: 'ContrailOne',
        height: 40,
        borderColor: '#766e87',
        borderWidth: 3,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: 'white', 
        shadowColor: "#131316",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.75,
        shadowRadius: 13.16,
        elevation: 20,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    signInButton: {
        fontSize: 25,
        justifyContent: 'center',
        marginTop: 25,
    },
})