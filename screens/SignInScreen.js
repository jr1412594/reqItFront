import React from 'react'
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

const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_X4rhxlJPatFlNWi68Z_iVDWUWa6O6Ua2A&usqp=CAU"}

export default function SignInScreen({navigation}) {
    return (
        <>
        <View style={styles.signInContainer}>
            <ImageBackground source={image} style={styles.image}>

            <Text style={styles.login}>
                ReqIt App
            </Text>
            <TextInput 
                style={styles.userName}
                placeholder="Enter Name"
                />
            <TextInput 
                style={styles.roomNumber}
                placeholder="Enter Room Number"
                />
            <Button title="Sign In"
            onPress={() => 
                navigation.navigate('Req Items')}
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