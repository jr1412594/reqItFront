import React, { useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import RequestCard from './RequestCard'
import { uniq } from 'lodash'
import{ HOST_WITH_PORT } from '../environment'
import { TouchableOpacity } from 'react-native-gesture-handler'

const requestUrl = 'http://localhost:7000/requests'


export default function RequestContainer() {
    const dispatch = useDispatch()
    const requests = useSelector(state => state.requests)

    useEffect(() => {
        fetch(`${HOST_WITH_PORT}/requests`)
        .then(response => response.json())
        .then((requests) => dispatch({ type: 'ALL_REQUESTS', requests: requests}))
    }, [])



    const showRequests = () => {
        const roomNumbers = uniq(requests.map(request => request.user.room_number))
            return roomNumbers.map(room => {
                const selectRequests = requests.filter(request => request.user.room_number === room)
                return (
                    <View style={styles.allReqItems}>
                        <View style={styles.roomDiv}>
                            <Text key={room.id} style={styles.room}>{room}</Text>
                        </View>
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
        <View style={styles.container}>
            <ScrollView>
                <View>
                    {showRequests()}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    allReqItems: {
        backgroundColor: '#f7fdfc',
    },
    room: {
        fontSize: 20,
        fontFamily: 'ContrailOne',
        height: 50,
        alignSelf: 'center',
    },
    roomDiv: {
    },
    container: {
        flex: 1,
    }
})
