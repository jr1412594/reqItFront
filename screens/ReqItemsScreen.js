import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../components/ItemCard'


export default function ReqItemsScreen() {

    const reqItems = useSelector(state => state.reqItems)

    const requestedItems = () => reqItems.map(item => {
        return (
            <ItemCard item={item} key={item.id}/>
        )
    })

    return (
        <View>
            <Text>
                Requested list
            </Text>
            <ScrollView>
                {requestedItems()}
            </ScrollView>
        </View>
    )
}
