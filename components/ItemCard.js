import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Button} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export default function ItemCard({item}) {
const dispatch = useDispatch()


    const handleRequest = () => {
        dispatch({type: 'REQ_ITEMS', item: item})
        console.log(item.name, item.id,'clicked this one')
    }

    return (
        <View>
            <Text>{item.name}</Text>
            <View>
                <Image style={styles.itemImage} source={{uri: item.image}} />
            </View>
            <Button title='Request Item'onPress={handleRequest}/>
        </View>
    )
}

const styles = StyleSheet.create({
    itemImage: {
        width: '100%',
        height: 100,
        marginBottom: 10,
    },
})
