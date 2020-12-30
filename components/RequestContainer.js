import React, { useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import RequestCard from './RequestCard'
import { uniq } from 'lodash'

const requestUrl = 'http://localhost:7000/requests'


export default function RequestContainer() {
    const dispatch = useDispatch()
    const requests = useSelector(state => state.requests)

    useEffect(() => {
        fetch(requestUrl)
        .then(response => response.json())
        .then((requests) => dispatch({ type: 'ALL_REQUESTS', requests: requests}))
    }, [])


    console.log(requests,'this one')
    const showRequests = () => {
        const roomNumbers = uniq(requests.map(request => request.user.room_number))
            return roomNumbers.map(room => {
                const selectRequests = requests.filter(request => request.user.room_number === room)
                return (
                    <View>
                        <Text>{room}</Text>
                        {selectRequests.map(request => {
                            return (
                                <RequestCard key={request.id} request={request}/>
                            )
                        })}
                    </View>
                )
        })
    }

    return (
        <ScrollView>
            {showRequests()}
        </ScrollView>
    )
}

//function Uniq from lodash// maybe just import
//
