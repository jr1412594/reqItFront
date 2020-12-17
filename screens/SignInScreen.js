import React from 'react'
import { 
        View, 
        Text, 
        Button, 
        StyleSheet, 
        TextInput } 
    from 'react-native'


export default function SignInScreen({navigation}) {
    return (
        <View>
            <Text style={styles.login}>
                Login screen
            </Text>
            <TextInput style={styles.userName}
            />
            <Button title="Sign In"
            onPress={() => 
                navigation.navigate('Req Item')}
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
        
    }
    
})