import React, { useState} from 'react'
import { Image, StyleSheet, Button, Text, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import { HOST_WITH_PORT } from '../environment'


export default function SecCameraComponent (){


    const onChooseImagePress = async () => {
        let result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            uploadImage(result.uri, 'test-image')
            // .then(storage().ref().child('images/' + imagename))
            // .then(() =>{
            //     Alert.alert("Success")
            // })
            // .catch((error) => {
            //     Alert.alert(error);
            // })
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
                    <Button title='choose image...' onPress={onChooseImagePress}/>
                </View>
        )  
    }

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 100,
        backgroundColor: 'white'
    }
})