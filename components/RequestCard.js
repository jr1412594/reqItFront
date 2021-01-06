import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { HOST_WITH_PORT } from  '../environment'
const reqUrl = 'http://localhost:7000/requests'


export default function RequestCard({request}) {
const dispatch = useDispatch()


const updateRequests = () => {
    fetch(`${HOST_WITH_PORT}/requests`)
        .then(response => response.json())
        .then((requests) => dispatch({ type: 'ALL_REQUESTS', requests: requests}))
    console.log(request.id,'clicked')
}

const handleComplete = () => {
    fetch(`${HOST_WITH_PORT}/requests/${request.id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    updateRequests()
    }


    return (
        <View style={styles.reqImageContainer}>
            <TouchableOpacity onPress={handleComplete}>
                <Text style={styles.itemNames}>{request.item.name}</Text> 
                <Image 
                    style={styles.reqImage}
                    source={{uri: request.item.image}}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    reqImage: {
        width: '100%',
        height: 210,
        marginBottom: 10,
        marginLeft: 1,
        marginRight: 20,
        borderRadius: 15,
    },
    itemNames: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
        fontFamily: 'ContrailOne',
    },
    reqImageContainer: {
        backgroundColor: '#bae8e8',
    }
})