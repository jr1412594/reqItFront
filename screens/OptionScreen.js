import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function OptionScreen({navigation}) {
    

    const handleRequest = () => {
        navigation.navigate('Req Items')
    }

    const handleReport = () => {
        navigation.navigate('Camera Screen')
    }



    return (
        <View style={styles.optionsContainer}>
            <View style={styles.requestScreen}>
                <TouchableOpacity onPress={handleRequest} >
                    <Text  style={styles.requestItemsText}>
                        Request Items
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.reportScreen}>
                <TouchableOpacity onPress={handleReport}>
                    <Text style={styles.reportText}>
                        Report Issue
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
        shadowOpacity: 0.25,
        shadowRadius: 10,

        elevation: 10,
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
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        
    },
    optionsContainer: {
        flex: 1,
        backgroundColor: '#898c9d',
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