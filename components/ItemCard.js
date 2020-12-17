import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export default function ItemCard({item}) {
const dispatch = useDispatch()


    const handleRequest = () => {
        dispatch({type: 'REQ_ITEMS', item: item})
        console.log(item.name, item.id,'clicked this one')
    }

    return (
        <View>
            <TouchableOpacity style={styles.needs} onPress={handleRequest}>
                <Text style={styles.itemNames}>{item.name}</Text>
                    <View>
                        <Image 
                            style={styles.itemImage} 
                            source={{uri: item.image}} />
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
        // backgroundColor: "#009fff",
        // padding: 10,
        marginTop: 10,
    },
    itemNames: {
        fontSize: 18,
    }
})
