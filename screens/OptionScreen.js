import React from 'react'
import { View, Button, Text, StyleSheet} from 'react-native'

export default function OptionScreen({navigation}) {
    

    const handleRequest = () => {
        navigation.navigate('Req Items')
    }

    const handleReport = () => {
    
    }



    return (
        <View style={styles.optionsContainer}>
            <View style={styles.requestScreen}>
                <Text onPress={handleRequest} style={styles.requestItemsText}>
                    Request Items
                </Text>
                {/* <Button 
                    title='Request Items'
                    onPress={handleRequest}
                /> */}
            </View>
            <View style={styles.reportScreen}>
                <Text onPress={handleReport} style={styles.reportText}>
                    Report Issue
                </Text>
                {/* <Button 
                    style={styles.reportButton}
                    title="Report Issue"
                    onPress={handleReport}
                /> */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    requestScreen: {
        backgroundColor: '#faf6f6',
        marginTop: 200,
        width: 270,
        height: 100,
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    reportScreen: {
        backgroundColor: '#faf6f6',
        marginTop: 100,
        height: 100,
        width: 270,
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
        
    },
    optionsContainer: {
        flex: 1,
        backgroundColor: '#e0e0e0'
        
    },
    requestItemsText: {
        fontSize: 30,
        color: '#131516',
        alignSelf: 'center',
        paddingTop: 30
    },
    reportText: {
        fontSize: 30,
        color: '#131516',
        alignSelf: 'center',
        paddingTop: 30
    }
})