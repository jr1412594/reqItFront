import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HOST_WITH_PORT } from '../environment'
const requestUrl = 'http://localhost:7000/requests'


export default function ItemCard({item}) {
    const dispatch = useDispatch()
    const reqItems = useSelector(state => state.reqItems)
    const createdUser = useSelector(state => state.createdUser)
    const user = useSelector(state => state.username)
    

    // console.log(createdUser, 'here')

    
    const handleRequest = () => {
        if(!reqItems.find(i => i.id === item.id)){
            dispatch({type: 'REQ_ITEMS', item: item})
            const requestObjects = {
                user_id: createdUser.id,
                item_id: item.id
            }
            fetch(`${HOST_WITH_PORT}/requests`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(requestObjects)
            })
            .then(response => response.json())
            .then(result => console.log(result)) 
        }
        
    }

    return (
        <View style={styles.itemDiv}>
            <TouchableOpacity style={styles.needs} onPress={handleRequest}>
                <Text style={styles.itemNames}>{item.name}</Text>
                    <View>
                        <Image 
                            style={styles.itemImage} 
                            source={{uri: item.image}} 
                        />
                    </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemImage: {
        width: '100%',
        height: 210,
        marginBottom: 10,
        borderRadius: 15,


    },
    needs: {
        marginTop: 10,
    },
    itemNames: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
        fontFamily: 'ContrailOne'
    },
    itemDiv: {
        backgroundColor: '#f7fdfc',
        borderBottomColor: 'gray',
    },
})
