import React, { Component} from 'react'
import { Image, StyleSheet, Button, Text, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';

export default class SecCameraComponent extends Component {


    onChooseImagePress = async () => {
        let result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            this.uploadImage(result.uri, 'test-image')
            .then(() =>{
                Alert.alert("Success")
            })
            .catch((error) => {
                Alert.alert(error);
            })
        }
    }

    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child('images/' + imageName);
        return ref.put(blob);
    }

    render(){
            return (
                <View style ={styles.container}>
                    <Button title='choose image...' onPress={this.onChooseImagePress}/>
                </View>
        )  
    }
}

const styles = StyleSheet.create({
    container: {
       height: '100%',
       paddingTop: 50
    }
})