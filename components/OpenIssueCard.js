import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function OpenIssueCard({issue}) {

    return (
        <View>
            <TouchableOpacity>
                <View>
                    <Image
                        style={styles.issueImage}
                        source={{uri: issue.image}}
                        />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    issueImage: {
        width: '100%',
        height: 210,
        marginBottom: 10,
        marginLeft: 1,
        marginRight: 20,
        borderRadius: 15,
        borderWidth: 0.5,
    }
})
