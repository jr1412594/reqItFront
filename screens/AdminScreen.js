import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function AdminScreen({navigation}) {

    const handleRequested = () => {
        navigation.navigate('All Requests')
    }

    const handleReported = () => {
        console.log('comming soon')
    }


    return (
        <View style={styles.optionsContainer}>
            <View style={styles.requestScreen}>
                <TouchableOpacity onPress={handleRequested} >
                    <Text  style={styles.requestItemsText}>
                        Requested Items
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.reportScreen}>
                <TouchableOpacity onPress={handleReported}>
                    <Text style={styles.reportText}>
                        Reported Issues
                    </Text>
                    {/* <Button 
                        style={styles.reportButton}
                        title="Report Issue"
                        onPress={handleReport}
                    /> */}
                </TouchableOpacity>
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
        shadowRadius: 15,
        elevation: 20,
        
    },
    optionsContainer: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        borderTopWidth: 1,
    },
    requestItemsText: {
        fontSize: 30,
        color: '#131516',
        alignSelf: 'center',
        paddingTop: 30,
        fontFamily: 'ContrailOne'
    },
    reportText: {
        fontSize: 30,
        color: '#131516',
        alignSelf: 'center',
        paddingTop: 30,
        fontFamily: 'ContrailOne'
    }
})
