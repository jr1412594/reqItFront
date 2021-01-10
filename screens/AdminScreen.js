import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'



export default function AdminScreen({navigation}) {

    const handleRequested = () => {
        navigation.navigate('All Requests')
    }

    const handleReported = () => {
        navigation.navigate('Issues Screen')
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
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    requestScreen: {
        backgroundColor: '#e3f6f5',
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
        shadowOpacity: 0.10,
        shadowRadius: 10,

        elevation: 10,
    },
    reportScreen: {
        backgroundColor: '#e3f6f5',
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
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 10,
        
    },
    optionsContainer: {
        flex: 1,
        backgroundColor: '#f7fdfc',
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
