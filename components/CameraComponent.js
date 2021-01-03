import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Feather as Icon } from "@expo/vector-icons"

export default function CameraComponent() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const cameraRef = useRef();

    const takePicture = async() => {
        if (cameraRef.current) {
            const options = {quality: 0.5, base64: true, };

            const picture = await cameraRef.current.takePictureAsync(options);

            // console.log(cameraRef.current.getSupportdRatiosAsync());
            const source = picture.uri;

            if(source) {
                cameraRef.current.resumePreview();
                console.log('picture source', source)
            }   
        }
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, [])

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <View>
            <Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={{backgroundColor: 'transparent', flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', paddingLeft: 5, paddingBottom: 5,}}>
                        <View>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={takePicture}
                        >
                            <Icon name='aperture' size={50} color='white' />
                    </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        // onPress={()=>{
                        //     setType(
                        //         type === Camera.Constants.type.back
                        //         ? Camera.Constants.Type.front
                        //         : Camera.Constants.Type.back
                        //     );
                        // }}>
                        >
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    camera: {
        // flexDirection: 'row',
    },
    // buttonContainer: {
    //     flex: 1,
    //     backgroundColor: 'transparent',
    //     flexDirection: 'row',
    //     margin: 20,
    // },
    // button: {
    //     flex: 0.1,
    //     alignSelf: 'flex-end',
    //     alignItems: 'center',
    // },
    text: {
        fontSize: 18,
        color: 'white',
        height: '100%',
    },
})
