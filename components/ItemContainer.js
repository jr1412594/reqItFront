import React, { useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView,  } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './ItemCard'
import { HOST_WITH_PORT } from '../environment'

const baseUrl = 'http://localhost:7000/items/'


export default function ItemContainer() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    



    useEffect(() => {
        fetch(`${HOST_WITH_PORT}/items`)
        .then(response => response.json())
        .then((items) => dispatch({type: 'LIST_ITEMS', items: items}))
        .catch(error => console.log(error))
    } , [])

    const showItems = () => items.map(item => {
        return (
            <ItemCard key={item.id} item={item}/>
        )
    })

    return (
        <ScrollView style={styles.container}>
            <View style={styles.itemsDiv}>
                {showItems()}   
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 1,
        backgroundColor: '#bae8e8',
    },
})