import React from 'react'
import { View, Button, StyleSheet} from 'react-native'

export default function OptionScreen({navigation}) {
    

    const handleRequest = () => {
        navigation.navigate('Req Items')
    }

    const handleReport = () => {
    
    }



    return (
        <View>
            <View style={styles.requestScreen}>
                <Button 
                    title='Request Items'
                    onPress={handleRequest}
                />
            </View>
            <View style={styles.reportScreen}>
                <Button 
                    title="Report Issue"
                    onPress={handleReport}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    requestScreen: {
        backgroundColor: 'gray',
    },
    reportScreen: {
        backgroundColor: 'whitesmoke'
    }
})