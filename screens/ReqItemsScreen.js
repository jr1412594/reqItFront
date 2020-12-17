import React from 'react'
import { Text, View, ScrollView, Button } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../components/ItemCard'


export default function ReqItemsScreen() {

    const dispatch = useDispatch()
    const reqItems = useSelector(state => state.reqItems)

    const requestedItems = () => reqItems.map(item => {
        return (
            <ItemCard item={item} key={item.id}/>
        )
    })

    return (
        <View>
            <Text>
            { console.log(reqItems)}
                Requested list
            </Text>
            <ScrollView>
                {requestedItems()}
            </ScrollView>
        </View>
    )
}
