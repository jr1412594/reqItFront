import React, { useEffect }from 'react'
import { View, Text } from 'react-native'

const requestUrl = 'http://localhost:7000/requests'
export default function RequestedItemsScreen() {
    useEffect(() => {
        fetch(requestUrl)
        .then(response => response.json())
        .then(result => console.log(result))
    })

    return (
    
        <View>
            <Text>
                Hello, its me
            </Text>
        </View>
        
    )
}
