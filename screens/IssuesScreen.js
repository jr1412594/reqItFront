import React from 'react'
// import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'
import OpenIssues from '../components/OpenIssues'

export default function IssuesScreen() {
    // const user = useSelector(state => state.username)

    return (
        <View style={{backgroundColor: '#f7fdfc', height: '100%', borderTopWidth: 1, paddingTop: 5}}>
            {/* <Text>{user.roomNumber}</Text> */}
            <OpenIssues />
        </View>
    )
}
