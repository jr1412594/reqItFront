import React from 'react'
import 
    { 
        View, 
        Text, 
        Button, 
        StyleSheet, 
        TextInput 
    } 
    from 'react-native'


export default function SignInScreen({navigation}) {
    return (
        <View>
            <Text style={styles.login}>
                Login screen
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
            />
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'baseline'
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
    }
    
})