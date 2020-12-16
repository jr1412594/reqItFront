import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Button} from 'react-native'
export default function ItemCard({item}) {

    // const handleRequest = () => {
    //   console.log('clicked')
    // }

    return (
        <View>
            <Button title='Request Item'/>
            <Text>{item.name}</Text>
            <View>
            <Image style={styles.itemImage} source={{uri: item.image}} />
            </View>
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
