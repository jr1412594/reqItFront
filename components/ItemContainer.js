import React, { useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView,  } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './ItemCard'

const baseUrl = 'http://localhost:7000/items/'


export default function ItemContainer() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)



    useEffect(() => {
        fetch(baseUrl)
        .then(response => response.json())
        .then((items) => dispatch({type: 'LIST_ITEMS', items: items}))
    } , [])

    const showItems = () => items.map(item => {
        return (
            <ItemCard key={item.id} item={item}/>
        )
    })

    return (
        <ScrollView style={styles.container}>
            {showItems()}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    }
})