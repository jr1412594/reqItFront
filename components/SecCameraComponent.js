import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import { HOST_WITH_PORT } from '../environment'


export default function SecCameraComponent (){

    const onChooseImagePress = async () => {
        let result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            uploadImage(result.uri, 'test-image')

        }
    }

    
    const uploadImage = async (uri, imageName) => {

        const response = await fetch(uri);
        const blob = await response.blob();

        let ref = firebase.storage().ref().child('images/' + imageName);
        ref.put(blob) 
        ref.getDownloadURL()
            .then(url => fetch(`${HOST_WITH_PORT}/issues`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: url
            })
        }
        ))
    }
    

            return (
                <View style ={styles.container}>
                    <View style={styles.textContainer}>
                        <Text onPress={onChooseImagePress} style={styles.text}>
                        Press to take Picture
                        </Text>
                    </View>
                </View>
        )  
    }


const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 100,
        backgroundColor: '#f7fdfc'
    },
    textContainer: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor:'#2a6689',
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 110,
        marginTop: 100,
        shadowColor: "#131316",
        shadowOffset: {
            width: 2,
            height: 7,
        },
        shadowOpacity: 0.20,
        shadowRadius: 10,
        elevation: 5,
    },
    text: {
        fontFamily: 'ContrailOne',
        fontSize: 21,
        color: 'white'
    } 
})