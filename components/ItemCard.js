import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export default function ItemCard({item}) {
const dispatch = useDispatch()
const reqItems = useSelector(state => state.reqItems)


    const handleRequest = () => {
            if(!reqItems.find(i => i.id === item.id)){
            dispatch({type: 'REQ_ITEMS', item: item})
            }
    }

    return (
        <View>
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
        height: 100,
        marginBottom: 10,
    },
    needs: {
        marginTop: 10,
    },
    itemNames: {
        fontSize: 18,
    }
})
