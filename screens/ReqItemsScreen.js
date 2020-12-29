import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native'
import { useSelector } from 'react-redux'
import ItemCard from '../components/ItemCard'

// const requestUrl = 'http://localhost:7000/requests'

export default function ReqItemsScreen() {

    const reqItems = useSelector(state => state.reqItems)
    // const createdUser = useSelector(state => state.createdUser)


    console.log(reqItems, 'requested')
    const requestedItems = () => reqItems.map(item => {
        return (
            <ItemCard item={item} key={item.id}/>
        )
    })

    // const requestObjects = {
    //     user_id: createdUser.id,
    //     item_id: reqItems[reqItems.length - 1].id
    // }

    // console.log(requestObjects, 'objects')

        // useEffect (() => {
        //     fetch(requestUrl, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //         },
        //         body: JSON.stringify(requestObjects)
        //     })
        //     .then(response => response.json())
        //     .then(result => console.log(result))
        // }, [reqItems]); 
        // console.log('run')

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
