
import React, { useEffect } from 'react'
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native'
import { useSelector } from 'react-redux'
import ItemCard from '../components/ItemCard'



export default function ReqItemsScreen({navigation}) {

    const reqItems = useSelector(state => state.reqItems)

    const handleLogout = () => {
        navigation.navigate('SignIn')
    }

    console.log(reqItems, 'requested')
    const requestedItems = () => reqItems.map(item => {
        return (
            <ItemCard item={item} key={item.id}/>
        )
    })


    return (
        <View style={styles.container}>
                <View style={styles.logout}>
                    <Text style={styles.logoutText} onPress={handleLogout}>
                        Log out
                    </Text>
                </View>
            <ScrollView>
                {requestedItems()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bae8e8',
        flex: 1,
        // borderTopWidth: 1,
    },
    logout: {
        backgroundColor: '#2a6689',
        height: 50,
        marginBottom: 30,
        width: '100%',
        alignSelf: 'center',
        // borderRadius: 10,
    },
    logoutText: {
        textAlign: 'center',
        color: '#272643',
        paddingTop: 13,
        fontSize: 20,
        fontFamily: 'ContrailOne',
    }
})
