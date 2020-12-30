
import React, { useEffect } from 'react'
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native'
import { useSelector } from 'react-redux'
import ItemCard from '../components/ItemCard'



export default function ReqItemsScreen() {

    const reqItems = useSelector(state => state.reqItems)



    console.log(reqItems, 'requested')
    const requestedItems = () => reqItems.map(item => {
        return (
            <ItemCard item={item} key={item.id}/>
        )
    })


    return (
        <View style={styles.container}>
            <Text>
                Requested list
            </Text>
            <ScrollView>
                {requestedItems()}
            </ScrollView>
            {/* <Button
                title="Request Items"
                onPress={handleRequests}
            /> */}
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})
