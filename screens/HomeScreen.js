import React from 'react'
import { Text, StyleSheet} from 'react-native'
import ItemContainer from '../components/ItemContainer'


export default function HomeScreen(porps) {
    return (
        <Text style={styles.home}>
            Home Screen
            <ItemContainer />
        </Text>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})