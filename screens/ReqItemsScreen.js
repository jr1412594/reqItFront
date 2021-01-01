
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
            <ScrollView>
                {requestedItems()}
            </ScrollView>
                <View style={styles.logout}>
                    <Button 
                        onPress={handleLogout}
                        title='Log out'
                    />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        flex: 1,
    },
    logout: {
        backgroundColor: 'blue',
        height: 40,
        marginBottom: 30,
        width: 90,
        alignSelf: 'flex-end',
        borderRadius: 10,
    }
})
