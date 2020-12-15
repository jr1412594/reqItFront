import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
export default function ItemCard({item}) {
    return (
        <View>
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
